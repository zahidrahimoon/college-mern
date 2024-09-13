// routes/mailRoutes.js
import express from 'express';
import { sendMailController } from '../controllers/sendMailController.js';

const router = express.Router();

router.post('/send/mail', sendMailController);

export default router;
