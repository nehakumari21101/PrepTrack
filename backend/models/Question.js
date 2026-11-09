const mongoose = require("mongoose");
const questionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    title: { type: String, required: true, trim: true, maxlength: 150 },
    topic: { type: String, default: "Other", trim: true, maxlength: 80 },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Solved"],
      default: "To Do",
    },
    date: {
      type: String,
      default: () => new Date().toLocaleDateString("en-IN"),
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Question", questionSchema);