const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    displayName: {
      type: String,
      default: "Student",
      trim: true,
      maxlength: 60,
    },
    dailyGoal: {
      type: String,
      default: "Solve 3 questions a day",
      trim: true,
      maxlength: 120,
    },
  },
  { timestamps: true },
);
module.exports = mongoose.model("UserSettings", settingsSchema);
