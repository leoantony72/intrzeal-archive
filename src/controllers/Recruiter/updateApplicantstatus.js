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
    if (Post_Owner[0].userid != loggedIn_user)
      return res.status(401).json({ err: "Unauthorized action" });

    const checkif_user_applied = await checkIfUserApplied(uid);
    if (!checkif_user_applied[0].userid)
      return res.status(400).json({ err: "User Not Applied" });
    const updatePost = await updateApplicant_Status(pid, uid);

    if (!updatePost[0].userid)
      return res.status(400).json({ err: "Something Went Wrong" });
      
    //@@send the user a Email with the link to chat with the recruiter
    return res.status(201).json({ success: `User Selected For The Job` });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};
