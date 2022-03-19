import { Applicant } from "../../model/Recruiter/Applicant.js";

export const updateApplicantstatus = async (req, res) => {
  const { pid } = req.query;
  const uid = "ckzrv2bh200004ftmeapovpbl";
  //check if user == user who created the post
  try {
    const updatePost = await Applicant(pid, uid);
    if (!updatePost.userid)
      return res.status(400).json({ data: { err: "Something Went Wrong" } });
    //send the user a Email with the link to chat with the recruiter
    return res
      .status(200)
      .json({ data: { success: `User Selected For The Job` } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};
