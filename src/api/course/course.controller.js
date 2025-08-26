import { Courses } from "./course.model.js";

export const addCourse = async (req, res) => {
  try {
    const getCourse = req.body;

    if (!getCourse) return res.status(404).json({ error: "corse not found" });

    await Courses.create(getCourse);

    res.status(200).json({ message: "Data Granted " });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error while adding course",
    });
  }
};

export const getCourses = async (req, res) => {
  try {
    const getCourses = await Courses.find();

    if (!getCourses) return res.status(404).json({ error: "corses not found" });

    res.status(200).json({ message: "Data Granted ", getCourses });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error while adding course",
    });
  }
};
