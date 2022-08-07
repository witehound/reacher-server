//@desc Set Goal
//@route GET /api/goal
//@access Private
export const getGoals = async (req, res) => {
  res.status(200).json({ get: `get` });
};

//@desc Post Goal
//@route POST /api/goal
//@access Private
export const setGoal = async (req, res) => {
  res.status(200).json({ post: `post` });
};

//@desc Update Goal
//@route PUT /api/goal/:id
//@access Private
export const updateGoal = async (req, res) => {
  res.status(200).json({ put: `put ${req.params.id}` });
};

//@desc Delete Goal
//@route DELETE /api/goal
//@access Private
export const deleteGoal = async (req, res) => {
  res.status(200).json({ delete: `delete ${req.params.id}` });
};
