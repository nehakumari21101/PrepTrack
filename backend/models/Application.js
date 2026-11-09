const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    status: {
      type: String,
      enum: [
        "Preparing",
        "Applied",
        "Assessment",
        "Interview",
        "Offer",
        "Rejected",
      ],
      default: "Preparing",
    },
    date: {
      type: String,
      default: () =>
        new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
    },
    link: { type: String, trim: true, default: "", maxlength: 2048 },
  },
  { timestamps: true },
);
module.exports = mongoose.model("Application", applicationSchema);
