import { Post } from "../../model/Recruiter/Post.js";

export const deletePost = async (req, res) => {
  const { pid } = req.params;

  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const delPost = await Post.delPost(pid, uid);
    if (!delPost.id)
      return res.status(400).json({ data: { err: "Something went Wrong" } });

    return res.status(200).json({ data: { success: "Job Post Deleted" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};
