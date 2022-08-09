import { Router } from "express";
import {
  createUser,
  loginUser,
  getMe,
} from "../controllers/userControllers.js";
import { verify } from "../middleware/auth.js";
const router = new Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/", verify, getMe);

export default router;
