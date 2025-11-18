import { useState } from "react";
import { Plus } from "lucide-react";
import Sidebar from "../components/Sidebar";

import EmptyBg from "../assets/empty-bg.jpg";

export default function HomePage() {
  const classes = [
    {
      id: "1",
      name: "Computer Networks",
      teacher: "Dr. Arun Agarwal ",
    },
    {
      id: "2",
      name: "Advanced Data Structures and Algorithms",
      teacher: "Dr. Kirti Yadav",
    },
    {
      id: "3",
      name: "Database Management Systems",
      teacher: "Dr. Ravish Sharma",
    },
    {
      id: "4",
      name: "Software Engineering",
      teacher: "Dr. Akshay Chamoli",
    },
    {
      id: "5",
      name: "Machine Learning",
      teacher: "Dr. Arpita Aggarwal",
    },
    {
      id: "6",
      name: "Programming with Python",
      teacher: "Dr. Rajni Dabas",
    },
    {
      id: "7",
      name: "Mathematics for Computing",
      teacher: "Dr. Charu Puri",
    },
    {
      id: "8",
      name: "Theory of Computation",
      teacher: "Dr. Veenu Bhasin",
    },
    {
      id: "9",
      name: "Theory Of Public Finance ",
      teacher: "Dr. Urvashi Sharma",
    },
    {
      id: "10",
      name: "Principles of Macroeconomics-I",
      teacher: "Dr. Deepika Kandpal",
    }
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  let mainContent;
if (classes.length === 0) {
  mainContent = (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <img src={EmptyBg} alt="Background" className="w-60 opacity-40 mb-6" />
      <h2 className="text-2xl font-semibold text-gray-600">Please select a class!</h2>
    </div>
  );
} else {
  mainContent = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {classes.map((cls, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
        >
          <div className="h-24 bg-blue-600 w-full"></div>

          <div className="p-5">
            <h3 className="text-xl font-semibold">{cls.name}</h3>
            <p className="text-gray-500 mt-1"> {cls.teacher}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onClassSelect={() => {}} onLogout={() => {}} />

      <div className="flex-1 overflow-y-auto p-6 relative">
        {mainContent}

        <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3">
          {menuOpen && (
            <div className="mb-2 bg-white shadow-xl rounded-xl p-4 space-y-3 w-40 animate-fade-in">
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
                Create a class
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">
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
      </div>
    </div>
  );
}
