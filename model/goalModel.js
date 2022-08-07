import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please adda atext"],
    },
  },
  {
    timestamps: true,
  }
);

export const goalModel = mongoose.model("goal", goalSchema);
