import express from 'express';
import medxiiController from '../controllers/medxiiController.js';

const router = express.Router();

// Define routes
router.get('/medxii', medxiiController.getMedXiiTimetable);
router.put('/medxii/:id', medxiiController.updateMedXiiTimetable);

export default router;
