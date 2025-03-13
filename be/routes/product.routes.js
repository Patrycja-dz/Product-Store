import express from "express";

import {
  createProductController,
  deleteProductController,
  getProductController,
  updateProductController,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProductController);

router.post("/", createProductController);
router.put("/:id", updateProductController);

router.delete("/:id", deleteProductController);

export default router;
