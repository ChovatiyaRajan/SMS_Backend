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
