import express from 'express';
import seniorOfficerController from '../controllers/seniorOfficerController.js';

const router = express.Router();

// Define routes for Senior Officers
router.get('/seniorofficers', seniorOfficerController.getSeniorOfficers);
router.put('/seniorofficers/:id', seniorOfficerController.updateSeniorOfficer);

export default router;
