import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { FiBox } from "react-icons/fi";

const Home = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        onClassSelect={setSelectedClass}
        onLogout={() => console.log("logout")}
      />

      <div className="flex-1 flex flex-col overflow-y-auto">
        <header className="bg-white shadow p-6 w-full">
          <h1 className="text-3xl font-bold text-gray-800">
            {selectedClass || "This is empty, please select a class"}
          </h1>
          {!selectedClass && (
            <p className="text-gray-600 mt-1">
              Select a class from the sidebar to get started
            </p>
          )}
        </header>

        <div className="flex-1 flex items-center justify-center p-6">
          {selectedClass ? (
            <div className="w-full max-w-3xl">
              <div className="bg-white p-4 rounded shadow">
                <p>Welcome to the {selectedClass} class section!</p>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full flex flex-col items-center justify-center text-gray-400">
              <FiBox className="absolute text-gray-200 text-[120px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
