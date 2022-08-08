import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please adda atext"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: user,
    },
  },
  {
    timestamps: true,
  }
);

export const goalModel = mongoose.model("goal", goalSchema);
