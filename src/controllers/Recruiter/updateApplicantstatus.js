import {
  checkIfUserApplied,
  updateApplicant_Status,
} from "../../model/Recruiter/Applicant.js";
import { postOwner } from "../../model/Recruiter/Post.js";

export const updateApplicantstatus = async (req, res) => {
  const { pid } = req.params;
  const { uid } = req.params;

  const loggedIn_user = res.locals.uid;
  try {
    const Post_Owner = await postOwner(pid);
    if (Post_Owner[0].user_id != loggedIn_user)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });

    const checkif_user_applied = await checkIfUserApplied(uid);
    if (!checkif_user_applied[0].user_id)
      return res
        .status(400)
        .json({ status: "failed", err: "User Not Applied" });
    const updatePost = await updateApplicant_Status(pid, uid);

    if (!updatePost[0].user_id)
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
