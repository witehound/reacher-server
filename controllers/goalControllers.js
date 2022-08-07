//@desc Set Goal
//@route GET /api/goal
//@access Private
export const getGoals = (req, res) => {
  res.status(200).json({ get: `get` });
};

//@desc Post Goal
//@route POST /api/goal
//@access Private
export const postGoal = (req, res) => {
  res.status(200).json({ post: `post` });
};

//@desc Update Goal
//@route PUT /api/goal/:id
//@access Private
export const updateGoal = (req, res) => {
  res.status(200).json({ put: `put ${req.params.id}` });
};

//@desc Delete Goal
//@route DELETE /api/goal
//@access Private
export const deleteGoal = (req, res) => {
  res.status(200).json({ delete: `delete ${req.params.id}` });
};
