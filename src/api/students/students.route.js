import { Router } from "express";
import { register } from "./students.controller.js";

export const students = Router();


students.post("/register" , register)