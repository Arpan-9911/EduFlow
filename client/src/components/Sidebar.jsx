import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../functions/userFunctions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const classes = ["Maths", "DSA", "TOC", "OS", "A", "DBMS", "CN", "SE", "AI", "ML", "DL", "NLP", "CV", "DM", "Big Data", "Cloud Computing"];
  return (
    <div className="h-dvh overflow-y-auto bg-gray-800 min-w-64">
      <div className="p-3">
        <h2 className="text-white text-2xl font-bold">EduFlow-LMS</h2>
      </div>
      <nav className="flex flex-col space-y-2">
        {classes.map((cls, index) => (
          <NavLink
            key={index}
            to={`/classes/${index}`}
            className={({ isActive }) => `text-white hover:bg-gray-700 mx-2 px-3 py-1 rounded ${
              isActive ? "bg-gray-700" : ""
            }`}
          >
            {cls}
          </NavLink>
        ))}
        <button
          onClick={() => {
            dispatch(logout());
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
