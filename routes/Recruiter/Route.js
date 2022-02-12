import express from "express";
const router = express.Router();

import { createPost } from "../../controllers/Recruiter/Createpost.js";

router.post("/posts", createPost);

export { router as register }
