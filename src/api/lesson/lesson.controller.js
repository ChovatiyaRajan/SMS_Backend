import { Courses } from "../course/course.model.js";
import { Lessons } from "./lesson.model.js";

export const addLesson = async (req, res) => {
  try {
    const { courseId, title, description, videoUrl, order } = req.body;

    if (!courseId || !title) {
      return res
        .status(400)
        .json({ message: "Course ID and Title are required" });
    }

    const course = await Courses.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found !" });
    }

    const newLesson = await Lessons.create({
      courseId,
      title,
      description,
      videoUrl,
      order,
    });

    res.status(201).json({
      message: "Lesson added successfully!",
      lesson: newLesson,
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getLessonsByCourse = async (req, res) => {
  try {
    const { courseId } = req.params;

    if (!courseId) {
      return res.status(400).json({ message: "Course ID is required" });
    }

    const lessons = await Lessons.find({ courseId }).sort({ order: 1 });

    res.status(200).json({
      message: "Lessons fetched successfully!",
      lessons: lessons || [],
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletedLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLesson = await Lessons.findByIdAndDelete(id);

    if (!deletedLesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.status(200).json({ message: "Lesson deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
