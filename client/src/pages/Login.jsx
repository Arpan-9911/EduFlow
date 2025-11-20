import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import Footer from "../components/Footer";
import eduflow from "../assets/eduflow.jpg";
import { googleLogin } from '../functions/userFunctions.js';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer?.data?.user) || null;
  const token = useSelector((state) => state.userReducer?.data?.token) || null;
  if (user && token) {
    return <Navigate to="/home" replace />;
  }

  const handleGoogleLogin = async (decoded) => {
    try {
      await dispatch(googleLogin(decoded, navigate));
    } catch (error) {
      toast.error(error.response?.data?.message || "Google Login Failed")
    }
  };

  return (
    <div>
      <div className="h-dvh bg-gray-50 flex">
        <div className="w-1/2">
          <img
            src={eduflow}
            alt="EduFlow"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 flex items-center justify-center p-8">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwtDecode(credentialResponse.credential);
              handleGoogleLogin(decoded);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
