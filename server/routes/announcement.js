import express from 'express';
import auth from '../middlewares/auth.js';
import { createAnnouncement, getAllAnnouncements } from '../controllers/announcement.js';

const router = express.Router();
router.post('/create/:classroomId', auth, createAnnouncement);
router.get('/all/:classroomId', auth, getAllAnnouncements);

export default router;