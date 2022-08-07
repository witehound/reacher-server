import { Router } from "express";
import {
  postGoal,
  updateGoal,
  getGoals,
  deleteGoal,
} from "../controllers/goalControllers.js";
const route = Router();

//@desc Set Goal
//@route GET /api/goal
//@access Private
route.get("/", getGoals);

//@desc Post Goal
//@route POST /api/goal
//@access Private
route.post("/", postGoal);

//@desc Update Goal
//@route PUT /api/goal/:id
//@access Private
route.put("/:id", updateGoal);

//@desc Delete Goal
//@route DELETE /api/goal
//@access Private
route.delete("/:id", deleteGoal);

export default route;
