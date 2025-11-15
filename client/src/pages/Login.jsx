import React from "react";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      <div className="flex flex-1">

        <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center p-8">
          <img
            src="/src/assets/eduflow.jpg"
            alt="EduFlow"
            className="rounded-2xl shadow-xl object-cover h-[450px] w-[350px]"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="text-center">

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to EduFlow
            </h1>

            <p className="text-gray-600 mb-6">
              A smarter way to learn.
            </p>

          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
};

export default Login;
