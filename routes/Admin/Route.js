import express from "express";
const router = express.Router();
import { addCategory } from "../../controllers/Admin/addCategory.js";


router.post("/category", addCategory);


export { router as Admin };
