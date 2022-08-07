import { Router } from "express";
import {
  postGoal,
  updateGoal,
  getGoals,
  deleteGoal,
} from "../controllers/goalControllers.js";
const route = Router();

route.get("/", getGoals);

route.post("/", postGoal);

route.put("/:id", updateGoal);

route.delete("/:id", deleteGoal);

export default route;
