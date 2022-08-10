import asyncHandler from "express-async-handler";
import { goalModel } from "../model/goalModel.js";
import { userModel } from "../model/userModel.js";

//@desc Set Goal
//@route GET /api/goal
//@access Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalModel.find({ user: req.user.id });
  res.status(200).json(goals);
});

//@desc Post Goal
//@route POST /api/goal
//@access Private
export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    return res.status(400).json(`Please add text field`);
  }
  const newGoal = new goalModel({ text: req.body.text, user: req.user.id });
  await newGoal.save();
  res.status(200).json({ newGoal, message: `added new goal` });
});

//@desc Update Goal
//@route PUT /api/goal/:id
//@access Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await goalModel.findById(req.params.id);
  if (!goal) {
    res.status(400).json({ message: "no goal with this id" });
  }

  //check user
  const user = await userModel.findById(req.user.id);
  if (!user) {
    res.status(401).json(`user not found`);
  }

  //make sure the loggin user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401).json({ message: `user not authorized` });
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
    res.status(400).json("no goal with this id");
  }

  //check user
  const user = await userModel.findById(req.user.id);
  if (!user) {
    res.status(401).json(`user not found`);
  }

  //make sure the loggin user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401).json({ message: `user not authorized` });
  }

  await goalModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ delete: `deleted ${req.params.id}` });
});
