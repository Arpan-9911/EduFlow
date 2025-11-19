import express from 'express';
import auth from '../middlewares/auth.js';
import { createAssignment, getAllAssignments } from '../controllers/assignment.js';

const router = express.Router();
router.post('/create/:classroomId', auth, createAssignment);
router.get('/all/:classroomId', auth, getAllAssignments);

export default router;