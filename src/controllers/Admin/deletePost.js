import { PostService } from "../../services/Admin/PostService.js";

const PostServiceInstance = new PostService();
export const deletePost = async (req, res) => {
  const { pid } = req.params;

  try {
    const delPost = await PostServiceInstance.delPost({ pid: pid });
    if (!delPost.id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something went wrong" });

    return res
      .status(200)
      .json({ status: "success", data: "Job Post Deleted" });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err });
  }
};
