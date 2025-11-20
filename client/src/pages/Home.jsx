import { useState } from "react";
import { Plus, BookCopy } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import EmptyBg from "../assets/empty-bg.jpg";
import JoinClassBox from "../components/JoinClassBox";
import CreateClassBox from "../components/CreateClassBox";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showJoinClassBox, setShowJoinClassBox] = useState(false);
  const [showCreateClassBox, setShowCreateClassBox] = useState(false);
  const classes = useSelector((state) => state.classroomReducer.classrooms);
  return (
    <div className="flex h-dvh bg-gray-100">
      <Sidebar />

      <div
        className={`flex-1 ${
          showCreateClassBox || showJoinClassBox
            ? "overflow-y-hidden"
            : "overflow-y-auto"
        } p-6 relative`}
      >
        {classes && classes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img
              src={EmptyBg}
              alt="Background"
              className="w-60 opacity-40 mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-600">
              Please select a class!
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes && classes.map((cls, index) => (
              <NavLink
                to={`/classes/${cls._id}`}
                key={index}
                className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition cursor-pointer"
              >
                <div className="h-12 bg-blue-600 w-full relative">
                  <BookCopy className="absolute right-3 -bottom-4" size={40} />
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-semibold">{cls.name}</h3>
                  <p className="text-gray-500 mt-1 mb-0">{cls.facultyName}</p>
                </div>
              </NavLink>
            ))}
          </div>
        )}

        <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3">
          {menuOpen && (
            <div className="mb-2 bg-white shadow-xl rounded-xl p-4 space-y-3 w-40 animate-fade-in">
              <button
                onClick={() => {
                  setShowCreateClassBox(true);
                  setMenuOpen(false);
                  setShowJoinClassBox(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Create a class
              </button>
              <button
                onClick={() => {
                  setShowJoinClassBox(true);
                  setMenuOpen(false);
                  setShowCreateClassBox(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                Join a class
              </button>
            </div>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:bg-blue-700 transition"
          >
            <Plus
              className={`transition-transform ${menuOpen ? "rotate-45" : ""}`}
              size={28}
            />
          </button>
        </div>
        {/* {showJoinClassBox && <JoinClassBox />} */}
        {showJoinClassBox && (
          <JoinClassBox setShowJoinClassBox={setShowJoinClassBox} />
        )}
        {showCreateClassBox && (
          <CreateClassBox setShowCreateClassBox={setShowCreateClassBox} />
        )}
      </div>
    </div>
  );
}
