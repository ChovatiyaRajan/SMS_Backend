import { Router } from "express";
import {
  addLesson,
  deletedLesson,
  getLessonsByCourse,
} from "./lesson.controller.js";

export const lessons = Router();

lessons.post("/add-lesson", addLesson);
lessons.get("/get-lessons/:courseId", getLessonsByCourse);
lessons.delete("/del-lessons/:id", deletedLesson);
