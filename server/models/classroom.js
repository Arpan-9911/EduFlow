import mongoose from "mongoose";
const classroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  facultyId: {
    type: String,
    required: true,
  },
  facultyName: {
    type: String,
    required: true,
  },
  students: {
    type: Array,
    required: true,
    default: [],
  }
}, { timestamps: true });

const Classroom = mongoose.model("Classroom", classroomSchema);
export default Classroom;