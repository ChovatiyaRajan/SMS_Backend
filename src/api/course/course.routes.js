import { Router } from "express";
import { addCourse, getCourses } from "./course.controller.js";
import { authenticate } from "../../middleware/authentication.js";

export const course = Router();

course.post("/add-course", authenticate, addCourse);
course.get("/get-courses", authenticate, getCourses);
