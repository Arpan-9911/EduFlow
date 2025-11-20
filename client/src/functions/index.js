import axios from 'axios'

const API = axios.create({ baseURL: import.meta.env.VITE_API })
API.interceptors.request.use((req) => {
  if(localStorage.getItem('EduFlowProfile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('EduFlowProfile')).token}`
  }
  return req
})

// Auth
export const googleLogin = (authData) => API.post('/users/google-login', authData)

// Classroom
export const createClassroom = (classroomData) => API.post('/classrooms/create', classroomData)
export const getAllClassrooms = () => API.get('/classrooms/all')
export const joinClassroom = (classroomData) => API.post('/classrooms/join', classroomData)
export const deleteClassroom = (classroomId) => API.delete('/classrooms/delete/' + classroomId)
export const leaveClassroom = (classroomId) => API.put('/classrooms/leave/' + classroomId)

// Announcements
export const getAllAnnouncements = (classroomId) => API.get('/announcements/all/' + classroomId)
export const createAnnouncement = (classroomId, announcementData) => API.post('/announcements/create/' + classroomId, announcementData)

// Assignments
export const getAllAssignments = (classroomId) => API.get('/assignments/all/' + classroomId)
export const createAssignment = (classroomId, assignmentData) => API.post('/assignments/create/' + classroomId, assignmentData)