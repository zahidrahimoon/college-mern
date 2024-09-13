import express from 'express';
import engxiController from '../controllers/engxiController.js';

const router = express.Router();

// Define routes
router.get('/engxi', engxiController.getEngXiTimetable);
router.put('/engxi/:id', engxiController.updateEngXiTimetable);

export default router;
