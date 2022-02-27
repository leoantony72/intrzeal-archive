import express from "express";
const router = express.Router();

import { createPost } from "../../controllers/Recruiter/Createpost.js";
import { deletePost } from "../../controllers/Recruiter/Deletejobpost.js";
import { updatePost } from "../../controllers/Recruiter/Updatejobpost.js";
import { checkifpostexist } from "../../middleware/checkifpostexist.js";
import { getAppliedUsers } from "../../controllers/Recruiter/GetappliedUser.js";

import { validateCreatePost } from "../../utils/validators/validateCreatePost.js";

router.post("/post", validateCreatePost, createPost); //create new job_post
router.put("/post/:id", checkifpostexist, updatePost); //update jobpost
router.delete("/post/:id", checkifpostexist, deletePost); //del job post

router.get("/applicants/:pid", checkifpostexist, getAppliedUsers); //get applied users to a post

export { router as Recruiter };
