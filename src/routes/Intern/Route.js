import express from "express";
import {
  addUser_skill,
  delUser_skill,
  getUser_skill,
} from "../../controllers/Intern/addUser_skills.js";
const router = express.Router();
import { applyPost } from "../../controllers/Intern/applyPost.js";
import { delete_applied_Post } from "../../controllers/Intern/deleteAppliedpost.js";
import { get_applied_Post } from "../../controllers/Intern/getAppliedpost.js";
import { checkif_category_exist } from "../../middleware/checkifcategoryexist.js";
import { checkifpostexist } from "../../middleware/checkifpostexist.js";

router.get("/posts", get_applied_Post); //gets the job_post user applied to

router
  .post("/apply/posts/:pid", checkifpostexist, applyPost) //apply to job post //@@ ADD VAIDATION TO DESCRIPTION
  .delete("/apply/posts/:pid", checkifpostexist, delete_applied_Post); //del the job application

router
  .get("/users/skills", getUser_skill)
  .post("/users/skills", checkif_category_exist, addUser_skill)
  .delete("/users/skills", checkif_category_exist, delUser_skill);

export { router as Intern };
