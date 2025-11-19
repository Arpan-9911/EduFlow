import Announcement from "../models/announcement.js";
import Classroom from "../models/classroom.js";

export const createAnnouncement = async (req, res) => {
  try {
    const { message } = req.body;
    const { userId: facultyId, classroomId } = req.params;
    const classroom = await Classroom.findById(classroomId);
    if(!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    } else if(classroom.facultyId !== facultyId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const announcement = await Announcement.create({ message, facultyId, classroomId });
    res.status(200).json({ announcement });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllAnnouncements = async (req, res) => {
  try {
    const { classroomId } = req.params;
    classroom = await Classroom.findById(classroomId);
    if(!classroom) {
      return res.status(404).json({ message: 'Classroom not found' });
    } else if(classroom.facultyId !== req.userId && !classroom.students.includes(req.userId)) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const announcements = await Announcement.find({ classroomId });
    if(!announcements) {
      return res.status(404).json({ message: 'Announcements not found' });
    }
    res.status(200).json({ announcements });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};