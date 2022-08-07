import { Router } from "express";
import {
  postGoal,
  updateGoal,
  getGoals,
  deleteGoal,
} from "../controllers/goalControllers.js";
const router = Router();

router.route("/").get(getGoals).post(postGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

export default router;
