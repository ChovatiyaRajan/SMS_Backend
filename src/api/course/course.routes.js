import { Router } from "express";
import {
  addCourse,
  getCourseById,
  getCourses,
  removeCourse,
  updateCourse,
} from "./course.controller.js";
import { authenticate } from "../../middleware/authentication.js";

export const course = Router();

course.post("/add-course", authenticate, addCourse);
course.get("/get-courses", authenticate, getCourses);
course.put("/update-course", authenticate, updateCourse);
course.get("/get-course/:id", authenticate, getCourseById);
course.delete("/remove-course/:removeId", authenticate, removeCourse);
