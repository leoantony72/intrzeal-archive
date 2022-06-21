import express from "express";
import {
  addUserSkill,
  deleteUserSkill,
  getUserSkill,
} from "../../controllers/Intern/addUser_skills.js";
const router = express.Router();
import { applyToPost } from "../../controllers/Intern/applyPost.js";
import { deleteAppliedPost } from "../../controllers/Intern/deleteAppliedpost.js";
import { getAppliedPost } from "../../controllers/Intern/getAppliedpost.js";
import { checkifCategoryExists } from "../../middleware/checkifcategoryexist.js";
import { checkIfPostExists } from "../../middleware/checkifpostexist.js";

router.get("/posts", getAppliedPost); //gets the job_post user applied to

router
  .post("/apply/posts/:pid", checkIfPostExists, applyToPost) //apply to job post //@@ ADD VAIDATION TO DESCRIPTION
  .delete("/apply/posts/:pid", checkIfPostExists, deleteAppliedPost); //del the job application

router
  .get("/users/skills", getUserSkill)
  .post("/users/skills", checkifCategoryExists, addUserSkill)
  .delete("/users/skills", checkifCategoryExists, deleteUserSkill);

export { router as Intern };
