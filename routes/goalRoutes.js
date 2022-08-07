import { Router } from "express";
import {
  setGoal,
  updateGoal,
  getGoals,
  deleteGoal,
} from "../controllers/goalControllers.js";
const router = Router();

router.route("/").get(getGoals).post(setGoal);
router.route("/:id").put(updateGoal).delete(deleteGoal);

export default router;
