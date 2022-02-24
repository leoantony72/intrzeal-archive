import express from "express";
const router = express.Router();
import { applyPost } from "../../controllers/Intern/applyPost.js";
import { delete_applied_Post } from "../../controllers/Intern/deleteAppliedpost.js";
import { get_applied_Post } from "../../controllers/Intern/getAppliedpost.js";
import { checkifpostexist } from "../../middleware/checkifpostexist.js";

router.get("/jobpost", get_applied_Post);
router.post("/jobpost/:pid", checkifpostexist, applyPost); //apply to job post
router.delete("/jobpost/:pid", checkifpostexist, delete_applied_Post); //del the application

export { router as Intern };
