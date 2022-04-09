import { postOwner, updateStatus } from "../../model/Recruiter/Post.js";

export const updateJob_Status = async (req, res) => {
  const { pid } = req.params;
  const { status } = req.query;

  if (status !== "OPEN")
    if (status !== "CLOSED")
      return res.status(400).json({
        status: "failed",
        err: "Status Options [OPEN,CLOSED] Are Only Allowed",
      });
  const uid = res.locals.uid;
  try {
    const Post_Owner = await postOwner(pid);
    if (Post_Owner[0].user_id != uid)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });
    const update_Status = await updateStatus(pid, uid, status);
    if (!update_Status[0].id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something Went Wrong" });

    return res
      .status(201)
      .json({ status: "success", data: `Status Updated to ${status}` });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
