import * as api from './index.js'
import toast from 'react-hot-toast'

export const getAllAnnouncements = (classroomId) => async (dispatch) => {
  try {
    const { data } = await api.getAllAnnouncements(classroomId)
    dispatch({ type: 'GET_ALL_ANNOUNCEMENTS', payload: data })
  } catch (error) {
    toast.error(error.response?.data?.message || "Classroom Fetch Failed")
  }
}

export const createAnnouncement = (classroomId, announcementData) => async (dispatch) => {
  try {
    await api.createAnnouncement(classroomId, announcementData)
    dispatch(getAllAnnouncements(classroomId))
    toast.success('Announcement Created Successfully')
  } catch (error) {
    toast.error(error.response?.data?.message || "Announcement Creation Failed")
  }
}