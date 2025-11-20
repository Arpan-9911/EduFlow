import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import { Send, Plus, ArrowUpCircle, Trash2, LogOut } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import UploadAssignment from "../components/UploadAssignment";
import SubmitAssignment from "../components/SubmitAssignment";
import { deleteClassroom, leaveClassroom } from "../functions/classroomFunctions";
import { getAllAnnouncements, createAnnouncement } from "../functions/announcementFunctions";
import { getAllAssignments } from "../functions/assignmentFunctions";
import { toast } from "react-hot-toast";

export default function Class() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const classes = useSelector((state) => state.classroomReducer.classrooms);
  const classroomId = useParams().classId;
  const classroom = classes?.find((cls) => cls._id === classroomId);

  const user = useSelector((state) => state.userReducer.data.user);
  const userRole = user?._id === classroom?.facultyId ? "teacher" : "student";

  useEffect(() => {
    dispatch(getAllAnnouncements(classroomId));
    dispatch(getAllAssignments(classroomId));
  }, [classroomId, dispatch]);

  const announcements = useSelector((state) => state.announcementReducer.announcements);
  const assignments = useSelector((state) => state.assignmentReducer.assignments);

  const [showUpload, setShowUpload] = useState(false);
  const [showSubmitBox, setShowSubmitBox] = useState(false);
  const [announcementData, setAnnouncementData] = useState('');

  const handleDelete = async () => {
    try {
      await dispatch(deleteClassroom(classroomId, navigate));
    } catch (error) {
      toast.error(error.response?.data?.message || "Classroom Deletion Failed")
    }
  };

  const handleLeave = async () => {
    try {
      await dispatch(leaveClassroom(classroomId, navigate));
    } catch (error) {
      toast.error(error.response?.data?.message || "Classroom Leaving Failed")
    }
  };

  const handleCreateAnnouncement = async () => {
    if(announcementData == '') {
      toast.error('Please enter an announcement')
      return
    }
    try {
      await dispatch(createAnnouncement(classroomId, { message: announcementData }));
      setShowSubmitBox(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Announcement Creation Failed")
    }
  };

  return classes && classroom && (
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
            <h1 className="text-2xl font-semibold">{classroom.name}</h1>
            <p className="text-gray-600 text-sm">{classroom.facultyName}</p>
            {userRole === "teacher" && (
              <div>
                <p className="text-gray-600 text-sm">Classroom ID: {classroom._id}</p>
                <p className="text-gray-600 text-sm">Students: {classroom.students.length}</p>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            {userRole === "teacher" && (
              <button
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                onClick={handleDelete}
              >
                <Trash2 size={25} />
              </button>
            )}

            {userRole === "student" && (
              <button
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                onClick={handleLeave}
              >
                <LogOut size={25} />
              </button>
            )}
          </div>
        </div>

        <div className="flex items-start gap-6 p-6">
          <div className="flex flex-col w-[60%] bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Announcements</h2>
            {userRole === "teacher" && (<div className="flex items-end mb-4">
              <textarea
                placeholder="Post an announcement..."
                className="grow border rounded px-4 py-2"
                rows={3}
                value={announcementData}
                onChange={(e) => setAnnouncementData(e.target.value)}
              ></textarea>
              <button
                onClick={handleCreateAnnouncement}
                className="ml-2 p-2 border bg-blue-400 hover:bg-blue-200 border-black rounded-full"
              >
                <Send size={16} />
              </button>
            </div>)}
            <div className="space-y-2">
              {announcements && announcements.map((a) => (
                <div key={a._id} className="px-3 py-2 bg-gray-100 rounded">
                  {a.message}
                  <div className="flex justify-end">
                    <span className="text-gray-600 text-sm">
                      {new Date(a.createdAt).toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[40%] bg-white rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Assignments</h2>
              {userRole === "teacher" && (<button
                className="p-2 rounded-full border bg-blue-400 hover:bg-blue-200"
                onClick={() => setShowUpload(!showUpload)}
              >
                <Plus size={18} />
              </button>)}
            </div>
            {showUpload && <UploadAssignment setShowUpload={setShowUpload} />}

            <div className="space-y-2">
              {assignments && assignments.map((asg) => (
                <div
                  key={asg._id}
                  className="px-3 py-2 bg-gray-100 rounded flex justify-between items-start"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{asg.title}</span>
                    <span className="text-gray-600">{asg.description}</span>
                  </div>

                  {userRole === "student" && (<button
                    className="p-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"
                    onClick={() => setShowSubmitBox(true)}
                  >
                    <ArrowUpCircle size={20} />
                  </button>)}
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
