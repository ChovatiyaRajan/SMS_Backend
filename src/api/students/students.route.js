import { Router } from "express";
import {
  delUser,
  getUser,
  getUsers,
  login,
  register,
  updateUser,
  updateUserCourseId,
} from "./students.controller.js";
import { authenticate } from "../../middleware/authentication.js";

export const students = Router();

students.post("/register", register);
students.post("/login", login);
students.get("/get-user", authenticate, getUser);
students.get("/get-users", authenticate, getUsers);
students.delete("/del-user/:id", authenticate, delUser);
students.put("/update-user/:id", authenticate, updateUser);
students.put("/course-enroll/:id", authenticate, updateUserCourseId);
