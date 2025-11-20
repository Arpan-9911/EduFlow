import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { getAllClassrooms } from './functions/classroomFunctions'

import Login from './pages/Login'
import Home from './pages/Home'
import Class from './pages/Class'
import ProtectedRoutes from './components/ProtectedRoutes'

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer?.data?.user) || null;
  const token = useSelector((state) => state.userReducer?.data?.token) || null;
  useEffect(() => {
    if (user && token) {
      dispatch(getAllClassrooms());
    }
  }, [user, token, dispatch]);
  return (
    <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/classes/:classId" element={<Class />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
