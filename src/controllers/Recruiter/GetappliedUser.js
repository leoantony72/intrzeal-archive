import { ApplicantService } from "../../services/Recruiter/ApplicantService.js";

const ApplicantServiceInstance = new ApplicantService();

export const getAppliedUsers = async (req, res) => {
  const { pid } = req.params;
  const uid = res.locals.uid;
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);

  if (!limit) limit = 10;
  if (!page) page = 0;
  if (limit <= 0) limit = 10;
  if (page < 0) page = 0;
  try {
    const getapplieduser = await ApplicantServiceInstance.getApplied({
      uid: uid,
      pid: pid,
      page: page,
      limit: limit,
    });
    if (!getapplieduser.owner === true)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });
    return res.status(200).json({
      status: "success",
      current_page: page,
      next_page: `http://localhost:1500/api/recruiter/posts/${pid}/applicants?page=${
        page + 1
      }`,
      prev_page: `http://localhost:1500/api/recruiter/posts/${pid}/applicants?page=${
        page == 0 ? 0 : page - 1
      }`,
      data: getapplieduser.getUsers,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ status: "failed", err: err });
  }
};
