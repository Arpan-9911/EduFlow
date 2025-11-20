import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../functions/userFunctions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useSelector((state) => state.classroomReducer.classrooms);
  return (
    <div className="h-dvh overflow-y-auto bg-gray-800 min-w-64">
      <div className="p-3">
        <Link to={'/home'} className="text-white text-2xl font-bold">EduFlow-LMS</Link>
      </div>
      <nav className="flex flex-col space-y-2">
        {classes && classes.map((cls, index) => (
          <NavLink
            key={index}
            to={`/classes/${cls._id}`}
            className={({ isActive }) => `text-white hover:bg-gray-700 mx-2 px-3 py-1 rounded ${
              isActive ? "bg-gray-700" : ""
            }`}
          >
            {cls.name}
          </NavLink>
        ))}
        <button
          onClick={() => {
            dispatch(logout(navigate));
          }}
          className="text-white bg-red-500 px-3 py-1 rounded m-2"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
