import { Router } from "express";
import { students } from "./api/students/students.route.js";

export const mainRoute = Router();

mainRoute.use("/students" , students)