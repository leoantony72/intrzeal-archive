import { delPost, postOwner } from "../../model/Recruiter/Post.js";

export const deletePost = async (req, res) => {
  const { pid } = req.params;

  const uid = res.locals.uid;
  try {
    const Post_Owner = await postOwner(pid);
    if (Post_Owner[0].user_id != uid)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });
    const delPosts = await delPost(pid, uid);

    return res
      .status(200)
      .json({ status: "success", data: "Job Post Deleted" });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
