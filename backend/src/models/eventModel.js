// models/eventModel.js
import connection from '../config/db.js';

// Create a new event
export const createEvent = (title, content, event_date, image, callback) => {
  const query = 'INSERT INTO events (title, content, event_date, image) VALUES (?, ?, ?, ?)';
  connection.query(query, [title, content, event_date, image], callback);
};

// Retrieve all events
export const getEvents = (callback) => {
  const query = 'SELECT * FROM events';
  connection.query(query, callback);
};

// Delete an event by ID
export const deleteEvent = (id, callback) => {
  const query = 'DELETE FROM events WHERE id = ?';
  connection.query(query, [id], callback);
};

// Edit an existing event by ID
export const editEvent = (id, title, content, event_date, image, callback) => {
  const query = 'UPDATE events SET title = ?, content = ?, event_date = ?, image = ? WHERE id = ?';
  connection.query(query, [title, content, event_date, image, id], callback);
};
