import express from "express";
const router = express.Router();

import {
  getPost,
  getPost_by_Id,
} from "../controllers/Getjobpost.js";

import {
  getCategory,
  getCategory_by_Id,
} from "../controllers/getCategory.js";

router.get("/posts", getPost);
router.get("/post/:id", getPost_by_Id);

router.get("/category", getCategory);
router.get("/category/:id", getCategory_by_Id);

export { router as common };