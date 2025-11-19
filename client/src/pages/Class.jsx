import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Send, Plus, ArrowUpCircle, Trash2, LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";
import UploadAssignment from "../components/UploadAssignment";
import SubmitAssignment from "../components/SubmitAssignment";

export default function Class() {
  const [showUpload, setShowUpload] = useState(false);
  const [showSubmitBox, setShowSubmitBox] = useState(false);


  const [userRole, setUserRole] = useState("teacher");


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
    description: `Assignment description ${i + 1}`,
  }));

  return (
    <div className="flex h-dvh bg-gray-100">
      <Sidebar />
      <div
        className={`flex-1 ${
          showUpload || showSubmitBox
            ? "overflow-y-hidden"
            : "overflow-y-auto"
        } p-6 relative`}
      >
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

        <div className="flex items-start gap-6 p-6">
          <div className="flex flex-col w-[60%] bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Announcements</h2>
            <div className="flex items-end mb-4">
              <textarea
                placeholder="Post an announcement..."
                className="grow border rounded px-4 py-2"
                rows={3}
              ></textarea>
              <button className="ml-2 p-2 border bg-blue-400 hover:bg-blue-200 border-black rounded-full">
                <Send size={16} />
              </button>
            </div>
            <div className="space-y-2">
              {announcements.map((a) => (
                <div key={a.id} className="px-3 py-2 bg-gray-100 rounded">
                  {a.text}
                </div>
              ))}
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

            <div className="space-y-2">
              {assignments.map((asg) => (
                <div
                  key={asg.id}
                  className="px-3 py-2 bg-gray-100 rounded flex justify-between items-start"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{asg.title}</span>
                    <span className="text-gray-600">{asg.description}</span>
                  </div>

                  <button
                    className="p-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"
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
