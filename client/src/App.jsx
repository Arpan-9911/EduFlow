import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Login from './pages/Login'
import Home from './pages/Home'
import Class from './pages/Class'
import ProtectedRoutes from './components/ProtectedRoutes'

const App = () => {
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
