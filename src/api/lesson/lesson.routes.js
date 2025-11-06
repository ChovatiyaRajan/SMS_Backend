import { Router } from "express";
import { addLesson } from "./lesson.controller.js";

export const lessons = Router();

lessons.post("/add-lesson", addLesson);
