import axios from 'axios';

const API_URL = 'http://localhost:3000/events';

// Get all events
export const getEvents = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

// Create a new event
export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(API_URL, eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
  }
};

// Update an existing event
export const updateEvent = async (eventId, eventData) => {
  try {
    const response = await axios.put(`${API_URL}/${eventId}`, eventData);
    return response.data;
  } catch (error) {
    console.error('Error updating event:', error);
  }
};

// Delete an event
export const deleteEvent = async (eventId) => {
  try {
    await axios.delete(`${API_URL}/${eventId}`);
  } catch (error) {
    console.error('Error deleting event:', error);
  }
};
