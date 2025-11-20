import * as api from './index.js'
import toast from 'react-hot-toast'

export const getAllClassrooms = () => async (dispatch) => {
  try {
    const { data } = await api.getAllClassrooms()
    dispatch({ type: 'GET_ALL_CLASSROOMS', payload: data })
  } catch (error) {
    toast.error(error.response?.data?.message || "Classroom Fetch Failed")
  }
}

export const createClassroom = (classroomData) => async (dispatch) => {
  try {
    await api.createClassroom(classroomData)
    dispatch(getAllClassrooms())
    toast.success('Classroom Created Successfully')
  } catch (error) {
    toast.error(error.response?.data?.message || "Classroom Creation Failed")
  }
}

export const joinClassroom = (classroomData) => async (dispatch) => {
  try {
    await api.joinClassroom(classroomData)
    dispatch(getAllClassrooms())
    toast.success('Classroom Joined Successfully')
  } catch (error) {
    toast.error(error.response?.data?.message || "Classroom Join Failed")
  }
}

export const deleteClassroom = (classroomId, navigate) => async (dispatch) => {
  try {
    await api.deleteClassroom(classroomId)
    dispatch(getAllClassrooms())
    navigate('/home')
    toast.success('Classroom Deleted Successfully')
  } catch (error) {
    toast.error(error.response?.data?.message || "Classroom Deletion Failed")
  }
}

export const leaveClassroom = (classroomId, navigate) => async (dispatch) => {
  try {
    await api.leaveClassroom(classroomId)
    dispatch(getAllClassrooms())
    navigate('/home')
    toast.success('Classroom Left Successfully')
  } catch (error) {
    toast.error(error.response?.data?.message || "Classroom Leaving Failed")
  }
}