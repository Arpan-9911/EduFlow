import express from 'express';
import auth from '../middlewares/auth.js';
import { createClassroom, joinClassroom, leaveClassroom, getAllClassrooms, deleteClassroom } from '../controllers/classroom.js';

const router = express.Router();
router.post('/create', auth, createClassroom);
router.post('/join', auth, joinClassroom);
router.put('/leave/:classroomId', auth, leaveClassroom);
router.get('/all', auth, getAllClassrooms);
router.delete('/delete/:classroomId', auth, deleteClassroom);

export default router;