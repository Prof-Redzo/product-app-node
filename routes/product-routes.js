import express from "express";
import { createProduct } from "../controllers/product-controller.js"
import verifyToken from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post("/",verifyToken, createProduct);

export default router;