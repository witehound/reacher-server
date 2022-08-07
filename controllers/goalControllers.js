export const getGoals = (req, res) => {
  res.status(200).json({ get: `get` });
};

export const postGoal = (req, res) => {
  res.status(200).json({ post: `post` });
};

export const updateGoal = (req, res) => {
  res.status(200).json({ put: `put ${req.params.id}` });
};

export const deleteGoal = (req, res) => {
  res.status(200).json({ delete: `delete ${req.params.id}` });
};
