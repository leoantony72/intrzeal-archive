import { Post } from "../../model/Recruiter/Post.js";
import { Post_category } from "../../model/Recruiter/Post_category.js";

export const updatePost = async (req, res) => {
  const { pid } = req.params;
  const { title, description, salary, job_experience, status } = req.body;

  if (status == !"OPEN" || !"CLOSED")
    return res
      .status(400)
      .json({ data: { err: "Provide Status Open or Closed" } });
  try {
    const uid = "ckzrv2bh200004ftmeapovpbl";
    const updatePost = await Post.updatePost(
      pid,
      uid,
      title,
      description,
      salary,
      job_experience,
      status
    );
    if (!updatePost.id)
      return res.status(400).json({ data: { err: "Something Went Wrong" } });
    return res.status(200).json({ data: { success: "Job Post Updated" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};

export const updatePost_addcategory = async (req, res) => {
  const { pid } = req.params;
  const { category } = req.body;

  try {
    const check = await Post_category.checkif_category_added(pid, category);

    const n_exist = check[0].count;
    if (n_exist != 0)
      return res.status(400).json({ data: { err: "Category Alredy Added" } });
    const updatePost = await Post_category.add_category(pid, category);
    if (!updatePost.postid)
      return res.status(400).json({ data: { err: "Something Went Wrong" } });

    return res.status(200).json({ data: { success: "Category Added" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};
export const updatePost_delcategory = async (req, res) => {
  const { pid } = req.params;
  const { category } = req.body;

  try {
    const check = await Post_category.checkif_category_added(pid, category);

    const n_exist = check[0].count;
    if (n_exist != 1)
      return res.status(400).json({ data: { err: "Category Not Added" } });
    const del_category = await Post_category.delCategory(pid, category);
    if(!del_category.postid) return res.status(400).json({ data: { err: "Something Went Wrong" } });

    return res.status(200).json({ data: { success: "Category deleted" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};
