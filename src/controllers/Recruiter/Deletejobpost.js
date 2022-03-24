import { delPost, postOwner } from "../../model/Recruiter/Post.js";

export const deletePost = async (req, res) => {
  const { pid } = req.params;

  const uid = res.locals.uid;
  try {
    const Post_Owner = await postOwner(pid);
    if (Post_Owner[0].userid != uid)
      return res.status(401).json({ err: "Unauthorized action" });
    const delPosts = await delPost(pid, uid);

    return res.status(200).json({ success: "Job Post Deleted" });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};
