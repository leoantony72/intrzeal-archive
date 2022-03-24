import express from "express";
const router = express.Router();

import { getPost, getPost_by_Id } from "../controllers/Getjobpost.js";

import { getCategory, getCategory_by_Id } from "../controllers/getCategory.js";
import { getProfile } from "../controllers/profile.js";
import { checkifUserexist } from "../middleware/checkifUserexist.js";

router.get("/posts", getPost);
router.get("/posts/:pid", getPost_by_Id);

router.get("/category", getCategory);
router.get("/category/:id", getCategory_by_Id);

router.get("/users/:uid/profile", checkifUserexist, getProfile);

export { router as common };
