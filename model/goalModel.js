import mongoose from "mongoose";
import { userModel } from "./userModel.js";

const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please adda atext"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: userModel,
    },
  },
  {
    timestamps: true,
  }
);

export const goalModel = mongoose.model("goal", goalSchema);
