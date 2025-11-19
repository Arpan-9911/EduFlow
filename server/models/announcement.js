import mongoose from "mongoose";
const announcementSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  facultyId: {
    type: String,
    required: true,
  },
  classroomId: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const Announcement = mongoose.model("Announcement", announcementSchema);
export default Announcement;