import { Router } from "express";
import {
  setGoal,
  updateGoal,
  getGoals,
  deleteGoal,
} from "../controllers/goalControllers.js";
import { verify } from "../middleware/auth.js";
const router = Router();

router.route("/").get(verify, getGoals).post(verify, setGoal);
router.route("/:id").put(verify, updateGoal).delete(verify, deleteGoal);

export default router;
