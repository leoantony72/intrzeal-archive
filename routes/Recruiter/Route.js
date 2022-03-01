import express from "express";
const router = express.Router();

import { createPost } from "../../controllers/Recruiter/Createpost.js";
import { deletePost } from "../../controllers/Recruiter/Deletejobpost.js";
import {
  updatePost,
  updatePost_addcategory,
  updatePost_delcategory,
} from "../../controllers/Recruiter/Updatejobpost.js";
import { checkifpostexist } from "../../middleware/checkifpostexist.js";
import { checkif_category_exist } from "../../middleware/checkifcategoryexist.js";
import { getAppliedUsers } from "../../controllers/Recruiter/GetappliedUser.js";

import { validateCreatePost } from "../../utils/validators/validateCreatePost.js";

router.post("/post", checkif_category_exist, validateCreatePost, createPost); //create new job_post
router.put("/post/:pid", checkifpostexist, checkif_category_exist, updatePost); //update jobpost
router.post(
  "/post/category/:pid",
  checkifpostexist,
  checkif_category_exist,
  updatePost_addcategory
); //add individual category
router.delete(
  "/post/category/:pid",
  checkifpostexist,
  checkif_category_exist,
  updatePost_delcategory
); //del individual category
router.delete("/post/:pid", checkifpostexist, deletePost); //del job post

router.get("/applicants/:pid", checkifpostexist, getAppliedUsers); //get applied users to a post

export { router as Recruiter };
