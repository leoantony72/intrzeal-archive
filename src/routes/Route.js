import express from "express";
const router = express.Router();

import { getPost, getPostById } from "../controllers/Getjobpost.js";

import { getCategory, getCategoryById } from "../controllers/getCategory.js";
import { getProfile } from "../controllers/profile.js";
import { checkIfUserExists } from "../middleware/checkifUserexist.js";

router.get("/posts", getPost);
router.get("/posts/:pid", getPostById);

router.get("/category", getCategory);
router.get("/category/:id", getCategoryById);

router.get("/users/:uid/profile", checkIfUserExists, getProfile);

export { router as common };
