import { Router } from "express";
import { students } from "./api/students/students.route.js";
import { course } from "./api/course/course.routes.js";
export const mainRoute = Router();

mainRoute.use("/students", students);
mainRoute.use("/course", course);
