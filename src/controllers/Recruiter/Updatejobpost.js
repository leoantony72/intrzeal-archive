import { postOwner, update_Post } from "../../model/Recruiter/Post.js";
import {
  add_category,
  checkif_category_added,
  delCategory,
} from "../../model/Recruiter/Post_category.js";

export const updatePost = async (req, res) => {
  const { pid } = req.params;
  const { title, description, salary, job_experience, status } = req.body;
  const uid = res.locals.uid;
  if (status != "OPEN")
    if (status != "CLOSED")
      return res.status(400).json({ err: "Provide Status Open or Closed" });
  try {
    const Post_Owner = await postOwner(pid);
    if (Post_Owner[0].userid != uid)
      return res.status(401).json({ err: "Unauthorized action" });
    const update_Posts = await update_Post(
      pid,
      uid,
      title,
      description,
      salary,
      job_experience,
      status
    );
    if (!update_Posts[0].id)
      return res.status(400).json({ err: "Something Went Wrong" });
    return res.status(201).json({ success: "Job Post Updated" });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

export const updatePost_addcategory = async (req, res) => {
  const { pid } = req.params;
  const { category } = req.body;
  const uid = res.locals.uid;
  try {
    const Post_Owner = await postOwner(pid);
    if (Post_Owner[0].userid != uid)
      return res.status(401).json({ err: "Unauthorized action" });
    const check = await checkif_category_added(pid, category);

    const n_exist = check[0].count;
    if (n_exist != 0)
      return res.status(400).json({ err: "Category Alredy Added" });
    const updatePost = await add_category(pid, category);
    if (!updatePost[0].post_id)
      return res.status(400).json({ err: "Something Went Wrong" });

    return res.status(201).json({ success: "Category Added" });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};
export const updatePost_delcategory = async (req, res) => {
  const { pid } = req.params;
  const { category } = req.body;

  const uid = res.locals.uid;
  try {
    const Post_Owner = await postOwner(pid);
    if (Post_Owner[0].userid != uid)
      return res.status(401).json({ err: "Unauthorized action" });
    const check = await checkif_category_added(pid, category);

    const n_exist = check[0].count;
    if (n_exist != 1)
      return res.status(400).json({ err: "Category Not Added" });
    const del_category = await delCategory(pid, category);
    if (!del_category[0].post_id)
      return res.status(400).json({ err: "Something Went Wrong" });

    return res.status(200).json({ success: "Category deleted" });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};
