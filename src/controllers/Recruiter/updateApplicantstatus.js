import { ApplicantService } from "../../services/Recruiter/ApplicantService.js";
const ApplicantServiceInstance = new ApplicantService();

export const updateApplicantStatus = async (req, res) => {
  const { pid } = req.params;
  const { uid } = req.params;

  const loggedInUser = res.locals.uid;
  try {

    const updateStatus = await ApplicantServiceInstance.updateApplicantStatus({
      uid: uid,
      pid: pid,
      loggedInUser: loggedInUser
    });

    if (!updateStatus.owner === true)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });

    if (!updateStatus.applied === true)
      return res
        .status(400)
        .json({ status: "failed", err: "User Not Applied" });

    if (!updateStatus.applicant[0].user_id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something Went Wrong" });

    //@@send the user a Email with the link to chat with the recruiter
    return res
      .status(201)
      .json({ status: "success", data: `User Selected For The Job` });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
