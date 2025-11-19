import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';

import userRoutes from './routes/user.js';
import classroomRoutes from './routes/classroom.js';
import announcementRoutes from './routes/announcement.js';
import assignmentRoutes from './routes/assignment.js';

dotenv.config();
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/classrooms', classroomRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/assignments', assignmentRoutes);

// Database connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Start the server
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
