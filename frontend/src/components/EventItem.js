import React from "react";

function EventItem({ event }) {
  return (
    <div className="event-item">
      <h3>{event.title}</h3>
      <p>Date: {new Date(event.date).toDateString()}</p>
      <p>Type: {event.type}</p>
    </div>
  );
}

export default EventItem;
