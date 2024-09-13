import express from 'express';
import genscixiiController from '../controllers/genscixiiController.js';

const router = express.Router();

// Define routes
router.get('/genscixii', genscixiiController.getGenSciXiiTimetable);
router.put('/genscixii/:id', genscixiiController.updateGenSciXiiTimetable);

export default router;
