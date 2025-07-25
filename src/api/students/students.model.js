import mongoose from "mongoose";

const studentScema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Student = mongoose.model("student", studentScema);
