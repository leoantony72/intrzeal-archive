import { getAppliedPost } from "../../model/Intern/Applicant.js";

export const get_applied_Post = async (req, res) => {
  try {
    const uid = res.locals.uid;
    const get_applied_Post = await getAppliedPost(uid);

    return res.status(200).json({ success: get_applied_Post });
  } catch (err) {
    return res.status(400).json({ err: err });
  }
};
