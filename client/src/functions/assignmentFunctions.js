import * as api from './index.js'
import toast from 'react-hot-toast'

export const getAllAssignments = (classroomId) => async (dispatch) => {
  try {
    const { data } = await api.getAllAssignments(classroomId)
    dispatch({ type: 'GET_ALL_ASSIGNMENTS', payload: data })
  } catch (error) {
    toast.error(error.response?.data?.message || "Classroom Fetch Failed")
  }
}

export const createAssignment = (classroomId, assignmentData) => async (dispatch) => {
  try {
    await api.createAssignment(classroomId, assignmentData)
    dispatch(getAllAssignments(classroomId))
    toast.success('Assignment Created Successfully')
  } catch (error) {
    toast.error(error.response?.data?.message || "Assignment Creation Failed")
  }
}