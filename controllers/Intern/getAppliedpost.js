import { Applicant } from "../../model/Intern/Applicant.js";

export const get_applied_Post = async (req, res) => {
  try {
    const uid = "ckzrv2bh200004ftmeapovpbl";
    const get_applied_Post =await Applicant.getAppliedPost(uid);

    return res.status(200).json({ data: { success: get_applied_Post } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};
