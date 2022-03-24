import {
  delApplication,
  checkifApplied,
} from "../../model/Intern/Applicant.js";

export const delete_applied_Post = async (req, res) => {
  const { pid } = req.params;
  //get userid from session
  const uid = res.locals.uid;
  try {
    const checkifapplied = await checkifApplied(uid, pid);
    if (!checkifapplied[0]) {
      return res.status(400).json({ err: "Not Applied To Job Post" });
    }
    const delete_applied_Posts = await delApplication(pid, uid);
    if (!delete_applied_Posts)
      return res.status(400).json({ err: "Something went wrong" });

    return res.status(200).json({ success: "application deleted" });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};
