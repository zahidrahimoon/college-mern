import express from 'express';
import genscixiController from '../controllers/genscixiController.js';

const router = express.Router();

// Define routes
router.get('/genscixi', genscixiController.getGenSciXiTimetable);
router.put('/genscixi/:id', genscixiController.updateGenSciXiTimetable);

export default router;
