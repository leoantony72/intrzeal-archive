import { getApplied_User } from "../../model/Recruiter/Applicant.js";

export const getAppliedUsers = async (req, res) => {
  const { pid } = req.params;
  const uid = res.locals.uid;
  try {
    const getPost = await getApplied_User(uid, pid);

    return res.status(200).json({ data: { success: getPost } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
