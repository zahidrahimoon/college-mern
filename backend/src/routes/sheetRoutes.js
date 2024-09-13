import express from 'express';
import { getSheetDataController } from '../controllers/sheetController.js';

const router = express.Router();

router.get('/sheet', getSheetDataController);

export default router;
