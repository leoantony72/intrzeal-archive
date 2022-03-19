import { Post } from "../../model/Admin/Post.js";

export const deletePost = async (req, res) => {
  const { pid } = req.query;

  try {
    const delPost = await Post.del_post(pid);
    if (!delPost.id)
      return res.status(400).json({ data: { err: "Something went wrong" } });

    return res.status(200).json({ data: { success: "Job Post Deleted" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};
