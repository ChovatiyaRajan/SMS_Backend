import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "corses",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  order: {
    type: Number,
    default: 0,
  },
});

export const Lessons = mongoose.model("lessons" , lessonSchema);