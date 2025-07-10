const mongoose = require("mongoose");
const collegeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", // fallback logo
    },
    location: {
      type: String,
    },
    code: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
