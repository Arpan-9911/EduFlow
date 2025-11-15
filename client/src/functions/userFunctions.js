import * as api from './index.js'
import toast from 'react-hot-toast'

export const googleLogin = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.googleLogin(authData)
    dispatch({ type: 'AUTH', data })
    navigate('/home')
    toast.success('Login Successful')
  } catch (error) {
    toast.error(error.response?.data?.message || "Google Login Failed")
  }
}

export const logout = (navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    toast.success('Logout Successful')
  } catch (error) {
    toast.error(error.response?.data?.message || "Logout Failed")
  }
}