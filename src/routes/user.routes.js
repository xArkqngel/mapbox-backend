import { Router } from "express";
import { getUsers, getUserById } from "../controllers/user.controller.js";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/users", authMiddleware, isAdmin, getUsers);
router.get("/users/:id", authMiddleware, getUserById);

export default router;
