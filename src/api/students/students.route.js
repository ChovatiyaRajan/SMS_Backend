import { Router } from "express";
import { getUser, login, register } from "./students.controller.js";
import { authenticate } from "../../middleware/authentication.js";

export const students = Router();

students.post("/register", register);
students.post("/login", login);
students.get("/get-user", authenticate , getUser);
