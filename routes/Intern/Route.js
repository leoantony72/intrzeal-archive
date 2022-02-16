import express from "express";
const router = express.Router();
import { applyPost } from '../../controllers/Intern/applyPost.js';

router.put('/posts/apply/:id', applyPost)

export { router as Intern };
