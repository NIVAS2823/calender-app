// src/components/Calendar.js
import React from 'react';
import './Calendar.css';

function Calendar({ events, onDeleteEvent }) {
  const renderEvents = (date) => {
    const eventsForDate = events.filter((event) => event.date === date);
    return eventsForDate.map((event) => (
      <div key={event.id} className="calendar-event">
        <span>{event.title} - {event.time}</span>
        <button 
          className="delete-button" 
          onClick={() => onDeleteEvent(event.id)}
        >
          X
        </button>
      </div>
    ));
  };

  return (
    <div className="calendar">
      <h2>Your Events</h2>
      {events.map((event) => (
        <div key={event.id} className="calendar-day">
          <h3>{event.date}</h3>
          {renderEvents(event.date)}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
