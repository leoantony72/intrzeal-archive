import {
  checkifApplied,
  createApplication,
  getJobStatus,
} from "../../model/Intern/Applicant.js";

export const applyPost = async (req, res) => {
  const date = new Date();
  const { pid } = req.params;
  const { description } = req.body;

  //get userid from session
  const uid = res.locals.uid;
  try {
    //checks if user applied to job post
    const checkifapplied = await checkifApplied(uid, pid);
    if (checkifapplied[0]) {
      return res.status(400).json({ err: "Alredy Applied" });
    }

    const JobStatus = await getJobStatus(pid);
    if (JobStatus[0].status === "CLOSED")
      return res.status(400).json({ err: "Job Post Closed" });

    const applytoPost = await createApplication(uid, pid, description, date);
    console.log(applytoPost);
    if (!applytoPost.user_id)
      return res.status(400).json({ err: "Something went wrong" });
    return res.status(201).json({ success: "Applied to job" });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};
