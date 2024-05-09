import express from "express";
import { createUser } from "../controllers/user-controller.js";
import verifyToken from "../middlewares/auth-middleware.js";
import checkIsUserAdmin from "../middlewares/role-middleware.js";
const router = express.Router();


router.post("/", verifyToken, checkIsUserAdmin, createUser);

export default router;