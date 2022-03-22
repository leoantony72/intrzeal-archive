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
import { updateJob_Status } from "../../controllers/Recruiter/statusUpdate.js";
import { updateApplicantstatus } from "../../controllers/Recruiter/updateApplicantstatus.js";
import { checkifUserexist } from "../../middleware/checkifUserexist.js";

router.post("/post", checkif_category_exist, validateCreatePost, createPost); //create new job_post
router
  .put("/post/:pid", checkifpostexist, checkif_category_exist, updatePost) //update jobpost
  .delete("/post/:pid", checkifpostexist, deletePost); //del job post

router
  .post(
    "/post/category/:pid",
    checkifpostexist,
    checkif_category_exist,
    updatePost_addcategory
  ) //add individual category
  .delete(
    "/post/category/:pid",
    checkifpostexist,
    checkif_category_exist,
    updatePost_delcategory
  ); //del individual category

router.put("/post/status/:pid",checkifpostexist,checkifUserexist, updateJob_Status); //update job status to OPEN / CLOSED

router.get("/applicants/:pid", checkifpostexist, getAppliedUsers); //get applied users to a post

router.put("/hire", checkifpostexist, updateApplicantstatus); //The User Gets Selected for the Job 

export { router as Recruiter };
