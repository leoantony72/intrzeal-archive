import { delPost } from "../../model/Recruiter/Post.js";

export const deletePost = async (req, res) => {
  const { pid } = req.params;

  const uid = res.locals.uid;
  try {
    const delPost = await delPost(pid, uid);
    if (!delPost.id)
      return res.status(400).json({ data: { err: "Something went Wrong" } });

    return res.status(200).json({ data: { success: "Job Post Deleted" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};
