import mongoose from "mongoose";
import bcrypt from "bcrypt";

const studentScema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "SUPER_ADMIN"],
    default: "USER",
  },
});

studentScema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(5);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

export const Users = mongoose.model("student", studentScema);
