// routes/commercexiiRoutes.js

import express from 'express';
import commercexiiController from '../controllers/commercexiiController.js';

const router = express.Router();

// Define routes
router.get('/commercexii', commercexiiController.getCommerceXiiTimetable);
router.put('/commercexii/:id', commercexiiController.updateCommerceXiiTimetable);

export default router;
