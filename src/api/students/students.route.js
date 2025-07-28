import { Router } from "express";
import { login, register } from "./students.controller.js";

export const students = Router();


students.post("/register" , register)
students.post("/login" , login)