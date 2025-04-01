import { Router } from "express";
import {
  createAsset,
  getAllAssets,
  getMyAssets,
  updateAsset,
  deleteAsset,
} from "../controllers/asset.controller.js";
import { authMiddleware, isAdmin } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/assets", authMiddleware, createAsset);
router.get("/assets", authMiddleware, isAdmin, getAllAssets);
router.get("/assets/my", authMiddleware, getMyAssets);
router.put("/assets/:id", authMiddleware, updateAsset);
router.delete("/assets/:id", authMiddleware, isAdmin, deleteAsset);

export default router;
