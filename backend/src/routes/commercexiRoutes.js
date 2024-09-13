import express from 'express';
import { getTimetable, updateCommerceXiTimetable } from '../controllers/commercexiController.js';

const router = express.Router();

router.get('/commercexi', getTimetable);
router.put('/commercexi/:id', updateCommerceXiTimetable);

export default router;
