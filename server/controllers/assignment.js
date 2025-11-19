import Classroom from "../models/classroom.js";
import Assignment from "../models/assignment.js";

export const createAssignment = async (req, res) => {
  try{
    const { title, description } = req.body;
    const { userId: facultyId, classroomId } = req.params;
    const classroom = await Classroom.findById(classroomId);
    if(!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    } else if(classroom.facultyId !== facultyId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const assignment = await Assignment.create({ title, description, facultyId, classroomId });
    res.status(200).json({ assignment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllAssignments = async (req, res) => {
  try{
    const { classroomId, userId } = req.params;
    classroom = await Classroom.findById(classroomId);
    if(!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    } else if(classroom.facultyId !== userId && !classroom.students.includes(userId)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const assignments = await Assignment.find({ classroomId });
    if(!assignments) {
      return res.status(404).json({ message: 'Assignments not found' });
    }
    res.status(200).json({ assignments });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};