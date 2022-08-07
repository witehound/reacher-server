import asyncHandler from "express-async-handler";
//@desc Set Goal
//@route GET /api/goal
//@access Private
export const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ get: `get` });
});

//@desc Post Goal
//@route POST /api/goal
//@access Private
export const setGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ post: `post` });
});

//@desc Update Goal
//@route PUT /api/goal/:id
//@access Private
export const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ put: `put ${req.params.id}` });
});

//@desc Delete Goal
//@route DELETE /api/goal
//@access Private
export const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ delete: `delete ${req.params.id}` });
});
