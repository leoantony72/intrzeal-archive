import express from "express";
const router = express.Router();

import { createPost } from "../../controllers/Recruiter/Createpost.js";
import { deletePost } from "../../controllers/Recruiter/Deletejobpost.js";

import { updatePost } from "../../controllers/Recruiter/Updatejobpost.js";

import {validateCreatePost} from '../../utils/validators/validateCreatePost.js';



router.post("/post", validateCreatePost, createPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export { router as Recruiter };
