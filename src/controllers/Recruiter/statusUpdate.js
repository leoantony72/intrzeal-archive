import { PostService } from "../../services/Recruiter/PostService.js";

const PostServiceInstance = new PostService();
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
    const updatestatus = await PostServiceInstance.updateStatus({
      pid: pid,
      uid: uid,
      status: status,
    });
    console.log(updatestatus)
    if (!updatestatus.owner === true)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });

    if (!updatestatus.update_Status[0].id)
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
