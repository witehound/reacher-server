import { Router } from "express";
import {
  createUser,
  loginUser,
  getMe,
} from "../controllers/userControllers.js";
const router = new Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/", getMe);

export default router;
