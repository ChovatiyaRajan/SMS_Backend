import jwt from "jsonwebtoken";
import { Users } from "../api/students/students.model.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: "unauthorized" });

    const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await Users.findById({ _id: id });

    console.log(user);

    req.user = user;

    next();
  } catch (error) {
    next(error.message);
  }
};
