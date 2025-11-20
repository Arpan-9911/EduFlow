import { combineReducers } from 'redux';
import userReducer from './user.js';
import classroomReducer from './classroom.js';
import announcementReducer from './announcement.js';
import assignmentReducer from './assignment.js';

export default combineReducers({ userReducer, classroomReducer, announcementReducer, assignmentReducer });