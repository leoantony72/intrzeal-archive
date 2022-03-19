import { Applicant } from "../../model/Recruiter/Applicant.js";

export const getAppliedUsers = async (req, res) => {
  const { pid } = req.params;
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const getPost = await Applicant.getAppliedUser(uid, pid);

    return res.status(200).json({ data: { success: getPost } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
