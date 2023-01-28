const mongoose = require("mongoose");

const helfenSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "firs name is required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "last name is required"],
      trim: true,
      text: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
    },
    nachricht: {
      type: String,
      required: [true, "nachricht is required"],
      trim: true,
      text: true,
    },
    savedPosts: [
      {
        post: {
          type: mongoose.Schema.ObjectId,
          ref: "Post",
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Anhelfen", helfenSchema);
