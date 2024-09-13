import express from 'express';
import medxiController from '../controllers/medxiController.js';

const router = express.Router();

// Define routes
router.get('/medxi', medxiController.getMedXiTimetable);
router.put('/medxi/:id', medxiController.updateMedXiTimetable);

export default router;
