import express from "express";
const router = express.Router();
import { addCategory } from "../../controllers/Admin/addCategory.js";
import { banUsers, unbanUsers } from "../../controllers/Admin/banUser.js";
import { deletePost } from "../../controllers/Admin/deletePost.js";
import { getStat } from "../../controllers/Admin/getStat.js";
import { getUsers, getUsersbyID } from "../../controllers/Admin/getUsers.js";
import { checkifUserexist } from "../../middleware/checkifUserexist.js";

router.post("/category", addCategory);
router.get("/users", getUsers);
router.get("/user", checkifUserexist, getUsersbyID);

router.delete("/del-post", checkifUserexist, deletePost);

router.put("/ban-users", checkifUserexist, banUsers);
router.put("/unban-users", checkifUserexist, unbanUsers);

router.get("/stat", getStat);

export { router as Admin };
