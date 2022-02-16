import express from "express";
const router = express.Router();

import { createPost } from "../../controllers/Recruiter/Createpost.js";
import { deletePost } from "../../controllers/Recruiter/Deletejobpost.js";
import {
  getPost,
  getPost_by_Id,
} from "../../controllers/Recruiter/Getjobpost.js";
import { updatePost } from "../../controllers/Recruiter/Updatejobpost.js";

import {validateCreatePost} from '../../utils/validators/validateCreatePost.js';

router.get("/posts", getPost);
router.get("/post/:id", getPost_by_Id);

router.post("/post", validateCreatePost, createPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export { router as Recruiter };
