import express from 'express';
import engxiiController from '../controllers/engxiiController.js';

const router = express.Router();

// Define routes
router.get('/engxii', engxiiController.getEngXiiTimetable);
router.put('/engxii/:id', engxiiController.updateEngXiiTimetable);

export default router;
