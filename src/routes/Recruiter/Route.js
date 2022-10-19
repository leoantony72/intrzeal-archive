import express from "express";
const router = express.Router();

import { createPost } from "../../controllers/Recruiter/Createpost.js";
import { deletePost } from "../../controllers/Recruiter/Deletejobpost.js";
import {
  updatePost,
  updatePostAddCategory,
  updatePostDeleteCategory,
} from "../../controllers/Recruiter/Updatejobpost.js";
import { checkIfPostExists } from "../../middleware/checkifpostexist.js";
import { checkifCategoryExists } from "../../middleware/checkifcategoryexist.js";
import { getAppliedUsers } from "../../controllers/Recruiter/GetappliedUser.js";

import { validateCreatePost } from "../../utils/validators/validateCreatePost.js";
import { updateJobStatus } from "../../controllers/Recruiter/statusUpdate.js";
import { updateApplicantStatus } from "../../controllers/Recruiter/updateApplicantstatus.js";
import { checkIfUserExists } from "../../middleware/checkifUserexist.js";

router.post("/posts", checkifCategoryExists, validateCreatePost, createPost); //create new job_post
router
  .put("/posts/:pid", checkIfPostExists, checkifCategoryExists, updatePost) //update jobpost
  .delete("/posts/:pid", checkIfPostExists, deletePost); //del job post

router
  .post(
    "/posts/:pid/category",
    checkIfPostExists,
    checkifCategoryExists,
    updatePostAddCategory
  ) //add individual category

  .delete(
    "/posts/:pid/category",
    checkIfPostExists,
    checkifCategoryExists,
    updatePostDeleteCategory
  ); //del individual category

router.put("/posts/:pid/status/", checkIfPostExists, updateJobStatus); //update job status to OPEN / CLOSED

router.get("/posts/:pid/applicants", checkIfPostExists, getAppliedUsers); //get applied users to a post

router.put(
  "/posts/:pid/applicants/hire/:uid",
  checkIfPostExists,
  checkIfUserExists,
  updateApplicantStatus
); //The User Gets Selected for the Job

export { router as Recruiter };
