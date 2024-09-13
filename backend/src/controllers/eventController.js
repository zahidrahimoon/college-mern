// controllers/eventController.js
import { createEvent as createEventModel, getEvents as getEventsModel, deleteEvent as deleteEventModel, editEvent as editEventModel } from '../models/eventModel.js';

// Create a new event
export const createEvent = (req, res) => {
  const { title, content, event_date } = req.body;
  const image = req.file ? req.file.filename : null;

  createEventModel(title, content, event_date, image, (err, result) => {
    if (err) {
      console.error('Error creating event:', err);
      res.status(500).send('Failed to create event');
      return;
    }
    res.send({ id: result.insertId, title, content, event_date, image });
  });
};

// Retrieve all events
export const getEvents = (req, res) => {
  getEventsModel((err, results) => {
    if (err) {
      console.error('Error retrieving events:', err);
      res.status(500).send('Failed to retrieve events');
      return;
    }
    res.json(results);
  });
};

// Delete an event by ID
export const deleteEvent = (req, res) => {
  const { id } = req.params;

  deleteEventModel(id, (err, result) => {
    if (err) {
      console.error('Error deleting event:', err);
      res.status(500).send('Failed to delete event');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Event not found');
    } else {
      res.send(`Event with ID ${id} deleted successfully`);
    }
  });
};

// Edit an existing event by ID
export const editEvent = (req, res) => {
  const { id } = req.params;
  const { title, content, event_date } = req.body;
  const image = req.file ? req.file.filename : null;

  editEventModel(id, title, content, event_date, image, (err, result) => {
    if (err) {
      console.error('Error editing event:', err);
      res.status(500).send('Failed to edit event');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Event not found');
    } else {
      res.send(`Event with ID ${id} updated successfully`);
    }
  });
};
