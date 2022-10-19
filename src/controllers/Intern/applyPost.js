import { ApplicantService } from "../../services/Intern/ApplicantService.js";

const ApplicantServiceInstance = new ApplicantService();

export const applyToPost = async (req, res) => {
  const { pid } = req.params;
  const { description } = req.body;

  //get userid from session
  const uid = res.locals.uid;
  try {
    const apply = await ApplicantServiceInstance.applyToPost({
      uid: uid,
      pid: pid,
      description: description,
    });


    if (apply.applied === true) {
      return res.status(400).json({ status: "failed", err: "Already Applied" });
    }

    if (apply.closed === true)
      return res.status(400).json({ status: "failed", err: "Job Post Closed" });

    if (!apply.post.user_id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something went wrong" });
    return res.status(201).json({ status: "success", data: "Applied to job" });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
