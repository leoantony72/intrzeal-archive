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

router.post("/posts", checkif_category_exist, validateCreatePost, createPost); //create new job_post
router
  .put("/posts/:pid", checkifpostexist, checkif_category_exist, updatePost) //update jobpost
  .delete("/posts/:pid", checkifpostexist, deletePost); //del job post

router
  .post(
    "/posts/:pid/category",
    checkifpostexist,
    checkif_category_exist,
    updatePost_addcategory
  ) //add individual category

  .delete(
    "/posts/:pid/category",
    checkifpostexist,
    checkif_category_exist,
    updatePost_delcategory
  ); //del individual category

router.put("/posts/:pid/status/", checkifpostexist, updateJob_Status); //update job status to OPEN / CLOSED

router.get("/posts/:pid/applicants", checkifpostexist, getAppliedUsers); //get applied users to a post

router.put(
  "/posts/:pid/applicants/hire/:uid",
  checkifpostexist,
  checkifUserexist,
  updateApplicantstatus
); //The User Gets Selected for the Job

export { router as Recruiter };
