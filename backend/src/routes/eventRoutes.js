// routes/eventRoutes.js
import express from 'express';
import { createEvent, getEvents, deleteEvent, editEvent } from '../controllers/eventController.js';
import upload from '../middlewares/uploadmiddle.js';  

const router = express.Router();

router.post('/events', upload.single('image'), createEvent);
router.get('/events', getEvents);
router.delete('/events/:id', deleteEvent);
router.put('/events/:id', upload.single('image'), editEvent);

export default router;
