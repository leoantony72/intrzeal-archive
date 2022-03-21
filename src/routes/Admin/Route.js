import express from "express";
const router = express.Router();
import { addCategory } from "../../controllers/Admin/addCategory.js";
import { banUsers, unbanUsers } from "../../controllers/Admin/banUser.js";
import { deletePost } from "../../controllers/Admin/deletePost.js";
import { getStat } from "../../controllers/Admin/getStat.js";
import { getUsers, getUsersbyID } from "../../controllers/Admin/getUsers.js";
import { checkifUserexist } from "../../middleware/checkifUserexist.js";
import { checkifpostexist } from "../../middleware/checkifpostexist.js";

router.post("/category", addCategory);
router.get("/users", getUsers);
router.get("/user", checkifUserexist, getUsersbyID);

router.delete("/del-post", checkifpostexist,checkifUserexist, deletePost);

router.put("/ban", checkifUserexist, banUsers);
router.put("/unban", checkifUserexist, unbanUsers);

router.get("/stat", getStat);

export { router as Admin };
