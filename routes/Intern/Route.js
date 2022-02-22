import express from "express";
const router = express.Router();
import { applyPost } from "../../controllers/Intern/applyPost.js";
import { delete_applied_Post } from "../../controllers/Intern/deleteAppliedpost.js";
import { get_applied_Post } from "../../controllers/Intern/getAppliedpost.js";

router.get("/jobpost", get_applied_Post);
router.delete("/jobpost/:pid", delete_applied_Post);
router.post("/post/apply/:pid", applyPost);

export { router as Intern };
