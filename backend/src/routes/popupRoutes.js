import express from 'express';
import { getPopups, updatePopupDetails } from '../controllers/popupController.js';

const router = express.Router();

// Route to get the active popup
router.get('/popup', getPopups);

// Route to update the popup (admin)
router.put('/popup/:id', updatePopupDetails);

export default router;
