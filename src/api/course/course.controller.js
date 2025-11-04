import { Courses } from "./course.model.js";

export const addCourse = async (req, res) => {
  try {
    const getCourse = req.body;

    console.log(getCourse);

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

export const removeCourse = async (req, res) => {
  try {
    const { removeId } = req.params;

    // console.log("id-", removeId);

    const removeCourse = await Courses.findByIdAndDelete(removeId);

    console.log(removeCourse);

    res.status(200).json({ message: "Done ...." });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error while Removing course",
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const data = req.body;

    const dataID = data.courseId;

    const updateCourse = await Courses.findByIdAndUpdate(dataID, data);

    res.status(200).json({ message: "Done ....", updateCourse });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error while Updateing course",
    });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Courses.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({
      error: error.message || "Error while Geeting course",
    });
  }
};
