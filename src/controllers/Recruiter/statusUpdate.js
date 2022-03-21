import { updateStatus } from "../../model/Recruiter/Post.js";

export const updateJob_Status = async (req, res) => {
  const { pid } = req.params;
  const { status } = req.query;

  if (status !== "OPEN")
    if (status !== "CLOSED")
      return res
        .status(400)
        .json({ err: "Status Options [OPEN,CLOSED] Are Only Allowed" });
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const updateStatus = await updateStatus(pid, uid, status);
    if (!updateStatus.id)
      return res.status(400).json({ data: { err: "Something Went Wrong" } });

    return res
      .status(200)
      .json({ data: { success: "Status Updated to " + status } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};
