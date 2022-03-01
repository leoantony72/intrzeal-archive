import express from "express";
const router = express.Router();

import { getPost, getPost_by_Id } from "../controllers/Getjobpost.js";

import { getCategory, getCategory_by_Id } from "../controllers/getCategory.js";
import { checkif_category_exist } from "../middleware/checkifcategoryexist.js";

router.get("/posts", getPost);
router.get("/post/:id", getPost_by_Id);

router.get("/category", getCategory);
router.get("/category/:id", checkif_category_exist, getCategory_by_Id);

export { router as common };
