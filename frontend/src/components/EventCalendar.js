import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // This should already be in your code
import './styles.css';  
// Optional: Styling for the calendar component

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Handle date change
  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const eventData = { ...newEvent, date: date.toDateString(), image: URL.createObjectURL(newEvent.image) };
    setEvents([...events, eventData]);
    setPopupOpen(false);
    setNewEvent({ title: '', date: '', description: '', image: null });
  };
  
  // Open popup to create a new event
  const openPopup = () => {
    setPopupOpen(true);
  };

  // Close popup
  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div>
      <h1>Event Calendar</h1>

      {/* Calendar Component */}
      <Calendar
        onChange={onChange}
        value={date}
        tileClassName={({ date, view }) => {
          // Highlight the tile with events
          const eventDate = events.find(event => new Date(event.date).toDateString() === date.toDateString());
          return eventDate ? 'event-tile' : '';
        }}
        onClickDay={openPopup}  // Open popup when clicking on a date
      />

      {/* Show selected date */}
      <p>Selected Date: {date.toDateString()}</p>

      {/* Display Events for the selected date */}
      <div>
        <h3>Events on {date.toDateString()}:</h3>
        {events.filter(event => new Date(event.date).toDateString() === date.toDateString())
          .map((event, index) => (
            <div key={index} className="event">
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              {/* Add any media (e.g., images, videos) here */}
            </div>
          ))}
      </div>

      {/* Popup form to add new event */}
      {isPopupOpen && (
        <div className="popup">
          <h2>Add Event</h2>
          <form onSubmit={handleEventSubmit}>
            <div>
              <label>Event Title:</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                required
              />
            </div>
            <div>
  <label>Event Image:</label>
  <input
    type="file"
    accept="image/*"
    onChange={(e) => setNewEvent({ ...newEvent, image: e.target.files[0] })}
  />
</div>

            <div>
              <label>Event Description:</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                required
              ></textarea>
            </div>
            <button type="submit">Add Event</button>
            <button type="button" onClick={closePopup}>Close</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
