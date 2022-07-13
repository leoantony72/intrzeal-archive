import { ApplicantService } from "../../services/Intern/ApplicantService.js";
const ApplicantServiceInstance = new ApplicantService();

export const deleteAppliedPost = async (req, res) => {
  const { pid } = req.params;
  //get userid from session
  const uid = res.locals.uid;
  try {
    const delApplication = await ApplicantServiceInstance.deleteApplication({
      uid: uid,
      pid: pid,
    });

    if (delApplication.applied === false) {
      return res
        .status(400)
        .json({ status: "failed", err: "Not Applied To Job Post" });
    }
    return res
      .status(200)
      .json({ status: "success", data: "application deleted" });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
