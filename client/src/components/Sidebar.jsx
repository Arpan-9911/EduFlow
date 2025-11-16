import React, { useState } from "react";
import { FiLogOut, FiMenu, FiBox } from "react-icons/fi"; 

const Sidebar = ({ onClassSelect, onLogout }) => {
  const [open, setOpen] = useState(true);

  const classes = ["Maths", "DSA", "TOC", "OS"];

  return (
    <div
      className={`bg-gray-900 text-white transition-all duration-300 flex flex-col p-3 ${
        open ? "w-64" : "w-16"
      }`}
    >
      <button
        className="mb-4 p-2 rounded hover:bg-gray-700 flex items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        <FiMenu className="text-xl" />
      </button>

      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {classes.map((cls, idx) => (
            <li
              key={idx}
              className="p-2 rounded hover:bg-gray-700 cursor-pointer flex items-center"
              onClick={() => onClassSelect(cls)}
            >
              <span className="flex-1">{open ? cls : cls[0]}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="mt-auto bg-red-600 hover:bg-red-700 w-full py-2 rounded font-medium flex items-center justify-center"
        onClick={onLogout}
      >
        {open ? "Logout" : <FiLogOut />}
      </button>
    </div>
  );
};

export default Sidebar;
