import { userModel } from "../model/userModel.js";
import asyncHandler from "express-async-handler";

//@desc Register a user
//@route Post /api/user
//@access Public
export const createUser = asyncHandler(async (req, res) => {
  const { name, password, email } = req.body;
  const newUser = {
    name,
    password,
    email,
  };
  await userModel.create(newUser);
  res.status(200).json({ message: `New user susccesfully created.` });
});

//@desc Register a user
//@route Post /api/user
//@access Public
export const loginUser = asyncHandler(async (req, res) => {
  const { password, email } = req.body;
  const user = await userModel.findOne({ email: email });
  if (!user || password != user.password) {
    res.status(400).json({ message: `Incorect Details.` });
  }
  await userModel.findByIdAndUpdate(user._id, req.body);
  res.status(200).json({ message: `New user susccesfully created.` });
});

//@desc Get a user
//@route get /api/user
//@access Public
export const getMe = asyncHandler(async (req, res) => {
  // const { name, password, email } = req.body;
  // const newUser = {
  //   name,
  //   password,
  //   email,
  // };
  // await userModel.create(newUser);
  // res.status(200).json({ message: `New user susccesfully created.` });
});
