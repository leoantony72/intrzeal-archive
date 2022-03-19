import { Applicant } from "../../model/Intern/Applicant.js";

export const delete_applied_Post = async (req, res) => {
  const { pid } = req.params;
  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const delete_applied_Post = await Applicant.delApplication(pid, uid);
    if(!delete_applied_Post.userid) return res.status(400).json({ data: { err: "Something went wrong" } });

    return res.status(200).json({ data: { success: "application deleted" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};
