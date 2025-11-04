import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  courseTimeline: {
    type: String,
    required: true,
  },
  courseFee: {
    type: Number,
    required: true,
  },
});

export const Courses = mongoose.model("corses", courseSchema);
