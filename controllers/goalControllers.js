import asyncHandler from "express-async-handler";
import { goalModel } from "../model/goalModel.js";

//@desc Set Goal
//@route GET /api/goal
//@access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalModel.find();
  res.status(200).json(goals);
});

//@desc Post Goal
//@route POST /api/goal
//@access Private
export const setGoal = asyncHandler(async (req, res) => {
  const newGoal = new goalModel({ text: req.body.text });
  await newGoal.save();
  res.status(200).json({ newGoal, message: `added new goal` });
});

//@desc Update Goal
//@route PUT /api/goal/:id
//@access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("no goal with this id");
  }
  const newGoal = { text: req.body.text };
  await goalModel.findByIdAndUpdate(req.params.id, newGoal, {
    new: true,
  });
  res.status(200).json({ newGoal, message: `updated your goal` });
});

//@desc Delete Goal
//@route DELETE /api/goal
//@access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("no goal with this id");
  }
  await goalModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ delete: `deleted ${req.params.id}` });
});
