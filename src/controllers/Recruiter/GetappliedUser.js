import { getApplied_User } from "../../model/Recruiter/Applicant.js";
import { postOwner } from "../../model/Recruiter/Post.js";

export const getAppliedUsers = async (req, res) => {
  const { pid } = req.params;
  const uid = res.locals.uid;
  try {
    const Post_Owner = await postOwner(pid);
    if (Post_Owner[0].userid != uid)
      return res.status(401).json({ err: "Unauthorized action" });
    const getUsers = await getApplied_User(uid, pid);

    return res.status(200).json({ success: getUsers });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ err: err });
  }
};
