import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import EventForm from "./components/EventForm";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission().then(permission => {
        if (permission !== "granted") {
          alert("Please enable notifications to receive event reminders.");
        }
      });
    }
  }, []);

  const addEvent = (event) => {
    setEvents([...events, { ...event, notified: false }]);
  };

  useEffect(() => {
    const checkEventNotifications = () => {
      const now = new Date();
      
      events.forEach(event => {
        const eventTime = new Date(event.date);

        if (Math.abs(now - eventTime) < 60000 && !event.notified) {
          showNotification(event);
          event.notified = true;
        }
      });
    };

    const intervalId = setInterval(checkEventNotifications, 60000);

    return () => clearInterval(intervalId);
  }, [events]);

  const showNotification = (event) => {
    if (Notification.permission === "granted") {
      const notification = new Notification("Event Reminder", {
        body: `Your event "${event.title}" is starting now!`,
        requireInteraction: true,
      });

      notification.onclick = () => notification.close();

      notification.onclose = () => {
        if (window.confirm("Would you like to snooze this event reminder for 5 minutes?")) {
          setTimeout(() => showNotification(event), 300000);
        }
      };
    }
  };

  return (
    <div className="App">
      <h1>Calendar App</h1>
      <EventForm onSaveEvent={addEvent} />
      <Calendar events={events} />
    </div>
  );
}

export default App;
