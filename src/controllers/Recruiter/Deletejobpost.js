import { PostService } from "../../services/Recruiter/PostService.js";
const PostServiceInstance = new PostService();
export const deletePost = async (req, res) => {
  const { pid } = req.params;

  const uid = res.locals.uid;
  try {
    const delPost = await PostServiceInstance.deletePost({
      pid: pid,
      uid: uid
    });
    if (!delPost.owner === true)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });
    return res
      .status(200)
      .json({ status: "success", data: "Job Post Deleted" });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
