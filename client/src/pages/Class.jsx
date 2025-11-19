import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Send, Plus, ArrowUpCircle, Trash2, LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";
import UploadAssignment from "../components/UploadAssignment";
import SubmitAssignment from "../components/SubmitAssignment";

export default function Class() {
  const [showUpload, setShowUpload] = useState(false);
  const [showSubmitBox, setShowSubmitBox] = useState(false);


  const [userRole, setUserRole] = useState("teacher"); // toggle this from backend


  const location = useLocation();
  const { name, teacher } = location.state || {
    name: "Class Name",
    teacher: "Faculty Name",
  };

  const announcements = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    text: `Announcement number ${i + 1}`,
  }));

  const assignments = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Assignment ${i + 1}`,
  }));

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full relative">
        <div className="p-6 border-b flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-600 text-sm">{teacher}</p>
          </div>

          <div className="flex gap-2">
            {userRole === "teacher" && (
              <button
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                onClick={"Handle Event"}
              >
                <Trash2 size={25} />
              </button>
            )}

            {userRole === "student" && (
              <button
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                onClick={"Handle event"}
              >
                <LogOut size={25} />
              </button>
            )}
          </div>
        </div>

        <div className="flex gap-6 p-6 h-[calc(100vh-100px)]">
          <div className="flex flex-col w-[60%] bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Announcements</h2>

            <div className="flex-grow overflow-y-auto space-y-3 pr-2">
              {announcements.map((a) => (
                <div key={a.id} className="p-3 bg-gray-100 rounded">
                  {a.text}
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center">
              <input
                type="text"
                placeholder="Post an announcement..."
                className="flex-grow border rounded-full px-4 py-2"
              />
              <button className="ml-2 p-2 border bg-blue-400 hover:bg-blue-200 border-black rounded-full">
                <Send size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col w-[40%] bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Assignments</h2>

              <button
                className="p-2 rounded-full border bg-blue-400 hover:bg-blue-200"
                onClick={() => setShowUpload(!showUpload)}
              >
                <Plus size={18} />
              </button>
            </div>

            {showUpload && <UploadAssignment setShowUpload={setShowUpload} />}

            <div className="flex-grow overflow-y-auto space-y-3 pr-2">
              {assignments.map((asg) => (
                <div
                  key={asg.id}
                  className="p-3 bg-gray-100 rounded flex justify-between items-center"
                >
                  <span>{asg.title}</span>

                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
                    onClick={() => setShowSubmitBox(true)}
                  >
                    <ArrowUpCircle size={20} />
                  </button>
                </div>
              ))}
              {showSubmitBox && (
                <SubmitAssignment setShowSubmitBox={setShowSubmitBox} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
