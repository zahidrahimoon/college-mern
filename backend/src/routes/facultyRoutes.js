import express from 'express';
import { createFaculty, getFaculty, updateFaculty, deleteFaculty } from '../controllers/facultyController.js';
import  upload  from '../middlewares/uploadmiddle.js';

const router = express.Router();

router.post('/faculty', upload.single('image'), createFaculty);
router.get('/faculty', getFaculty);
router.put('/faculty/:id', upload.single('image'), updateFaculty);
router.delete('/faculty/:id', deleteFaculty);

export default router;
