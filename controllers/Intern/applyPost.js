import { Applicant } from "../../model/Intern/Applicant.js";

export const applyPost = async (req, res) => {
  const date = new Date();
  const { pid } = req.params;
  const { description } = req.body;

  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    //checks if user applied to job post
    const checkifapplied =await Applicant.checkifApplied(uid, pid);
    if (checkifapplied[0]) {
      return res.status(400).json({ data: { err: "Alredy Applied" } });
    }

    const applytoPost = await Applicant.createApplication(
      uid,
      pid,
      description,
      date
    );
    if (!applytoPost.userid)
      return res.status(400).json({ data: { err: "Something went wrong" } });
    return res.status(201).json({ data: { success: "Applied to job" } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};
