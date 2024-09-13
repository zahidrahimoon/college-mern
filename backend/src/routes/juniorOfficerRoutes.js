import express from 'express';
import juniorOfficerController from '../controllers/juniorOfficerController.js';

const router = express.Router();

// Define routes for Junior Officers
router.get('/juniorofficers', juniorOfficerController.getJuniorOfficers);
router.put('/juniorofficers/:id', juniorOfficerController.updateJuniorOfficer);

export default router;
