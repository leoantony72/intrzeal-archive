import express from "express";
const router = express.Router();
import { addCategory } from "../../controllers/Admin/addCategory.js";
import { banUsers, unbanUsers } from "../../controllers/Admin/banUser.js";
import { deletePost } from "../../controllers/Admin/deletePost.js";
import { getStat } from "../../controllers/Admin/getStat.js";
import { getUsers, getUsersbyID } from "../../controllers/Admin/getUsers.js";
import { checkifUserexist } from "../../middleware/checkifUserexist.js";
import { checkifpostexist } from "../../middleware/checkifpostexist.js";
import { delete_category } from "../../controllers/Admin/delCategory.js";

router
.post("/category", addCategory)
.delete("/category",delete_category)

router.delete("/post/:pid", checkifpostexist, deletePost);


router.get("/users", getUsers);
router.get("/users/:uid", checkifUserexist, getUsersbyID);
router.put("/users/ban/:uid", checkifUserexist, banUsers);
router.put("/users/unban/:uid", checkifUserexist, unbanUsers);

router.get("/stat", getStat);

export { router as Admin };
