import express from "express";
const router = express.Router();
import { addCategory } from "../../controllers/Admin/addCategory.js";
import { getStat } from "../../controllers/Admin/getStat.js";
import { getUsers } from "../../controllers/Admin/getUsers.js";

router.post("/category", addCategory);
router.get("/users", getUsers);

router.get("/stat", getStat);

export { router as Admin };
