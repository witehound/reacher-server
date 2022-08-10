import { userModel } from "../model/userModel.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import { generateToken } from "../helper/jwt.js";

//@desc Register a user
//@route Post /api/user
//@access Public
export const createUser = asyncHandler(async (req, res) => {
  const { name, password, email } = req.body;
  if (!name || !password || !email) {
    return res.status(400).json({ message: `add all fields` });
  }
  let user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).json({ message: `user already exist` });
  }

  //hash password
  const saltRound = 10;
  const hashedPassword = await bcrypt.hash(password, saltRound);

  //createuser
  user = new userModel({
    name,
    password: hashedPassword,
    email,
  });
  const newUser = await user.save();
  if (newUser) {
    return res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token: generateToken(user.id),
    });
  } else {
    return res.status(400).json({ message: `Failed to create a new user.` });
  }
});

//@desc Login a user
//@route Post /api/user
//@access Public
export const loginUser = asyncHandler(async (req, res) => {
  const { password, email } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: `Incorect Details.` });
  }

  //comapre password
  const verifiedPassword = await bcrypt.compare(password, user.password);
  if (!verifiedPassword) {
    return res.status(400).json({ message: `Incorect Password.` });
  }

  return res.status(200).json({
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  });
});

//@desc Get a user
//@route get /api/user
//@access Private
export const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await userModel.findById(req.user.id);

  res.status(200).json({
    id: _id,
    name,
    email,
  });
});
