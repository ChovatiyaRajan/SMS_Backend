import { Users } from "./students.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const user = req.body;
    if (!user) return res.status(404).json({ message: "user not found !" });

    await Users.create(user);

    res.status(200).json({ message: "user granted  !!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message || "error while registration !!" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(404)
        .json({ message: "Email and password are required " });

    const user = await Users.findOne({ email });

    if (!user) return res.status(404).json({ message: "Email not found ! " });

    const isMetch = await bcrypt.compare(password, user.password);

    if (!isMetch)
      return res.status(404).json({ message: "Password not metch ! " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "10h",
    });

    if (!token)
      return res.status(404).json({ message: "You are unauthorized" });

    return res
      .status(200)
      .json({ message: "Login Successfull !", token, user });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({ message: "user found", user });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();

    if (!allUsers) return res.status(404).json({ message: "No users found" });

    res.status(200).json({ message: "All users found", allUsers });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const delUser = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(id, "+++++++++id========");

    const deleteUser = await Users.findByIdAndDelete(id);

    if (!deleteUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Use deleted successfully", deleteUser });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
