import express from 'express';
import { login, forgotPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/forgot-password', forgotPassword);

export default router;
