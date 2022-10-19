import express from "express";
const router = express.Router();
import { addCategory } from "../../controllers/Admin/addCategory.js";
import { banUsers, unbanUsers } from "../../controllers/Admin/banUser.js";
import { deletePost } from "../../controllers/Admin/deletePost.js";
import { getStat } from "../../controllers/Admin/getStat.js";
import { getUsers, getUsersbyID } from "../../controllers/Admin/getUsers.js";
import { checkIfUserExists } from "../../middleware/checkifUserexist.js";
import { checkIfPostExists } from "../../middleware/checkifpostexist.js";
import { deleteCategory } from "../../controllers/Admin/delCategory.js";

router
.post("/category", addCategory)
.delete("/category",deleteCategory)

router.delete("/post/:pid", checkIfPostExists, deletePost);


router.get("/users", getUsers);
router.get("/users/:uid", checkIfUserExists, getUsersbyID);
router.put("/users/ban/:uid", checkIfUserExists, banUsers);
router.put("/users/unban/:uid", checkIfUserExists, unbanUsers);

router.get("/stat", getStat);

export { router as Admin };
