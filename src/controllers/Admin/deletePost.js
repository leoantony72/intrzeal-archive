import { del_post } from "../../model/Admin/Post.js";

export const deletePost = async (req, res) => {
  const { pid } = req.params;

  try {
    const delPost = await del_post(pid);
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
