import React, { useState } from "react";

const Sidebar = ({ onClassSelect, onLogout }) => {
  const [open, setOpen] = useState(true);

  const classes = ["Maths", "DSA", "TOC", "OS"];

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${open ? "w-64" : "w-16"} flex flex-col p-3`}>
      <button
        className="mb-4 p-2 rounded hover:bg-gray-700"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {classes.map((cls, idx) => (
            <li
              key={idx}
              className="p-2 rounded hover:bg-gray-700 cursor-pointer"
              onClick={() => onClassSelect(cls)}
            >
              {open ? cls : cls[0]} 
            </li>
          ))}
        </ul>
      </div>

      <button
        className="mt-auto bg-red-600 hover:bg-red-700 w-full py-2 rounded font-medium"
        onClick={onLogout}
      >
        {open ? "Logout" : "⎋"}
      </button>
    </div>
  );
};

export default Sidebar;
