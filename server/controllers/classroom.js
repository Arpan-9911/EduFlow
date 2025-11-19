import Classroom from '../models/classroom.js';

export const createClassroom = async (req, res) => {
  try {
    const { name } = req.body;
    const { userId: facultyId } = req.params;
    const classroom = await Classroom.create({ name, facultyId });
    res.status(200).json({ classroom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const joinClassroom = async (req, res) => {
  try {
    const { classroomId } = req.body;
    const { userId } = req.params;
    const classroom = await Classroom.findById(classroomId);
    classroom.students.push(userId);
    await classroom.save();
    res.status(200).json({ classroom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllClassrooms = async (req, res) => {
  try {
    const { userId } = req.params;
    const classrooms = await Classroom.find({ $or: [{ facultyId: userId }, { students: userId }] });
    res.status(200).json({ classrooms });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteClassroom = async (req, res) => {
  try {
    const { classroomId } = req.params;
    const { userId } = req.params;
    const classroom = await Classroom.findByIdAndDelete(classroomId);
    if(!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    } else if(classroom.facultyId !== userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    } else {
      await classroom.deleteOne();
    }
    res.status(200).json({ classroom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const leaveClassroom = async (req, res) => {
  try {
    const { userId, classroomId } = req.params;
    const classroom = await Classroom.findById(classroomId);
    classroom.students = classroom.students.filter((student) => student !== userId);
    await classroom.save();
    res.status(200).json({ classroom });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};