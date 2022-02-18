import express from "express";
const router = express.Router();
import { addCategory } from "../../controllers/Admin/addCategory.js";
import {
  getCategory,
  getCategory_by_Id,
} from "../../controllers/Admin/getCategory.js";

router.post("/category", addCategory);
router.get("/category", getCategory);
router.get("/category/:id", getCategory_by_Id);

export { router as Admin };
