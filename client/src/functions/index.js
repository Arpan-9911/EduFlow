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