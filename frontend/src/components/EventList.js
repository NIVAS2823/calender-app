import React, { useEffect, useState } from 'react';
import { getEvents } from './eventService';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await getEvents();
      setEvents(eventData);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.date} at {event.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
