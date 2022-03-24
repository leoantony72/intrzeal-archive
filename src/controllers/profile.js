import {
  getrole,
  get_User_profile_intern,
  get_User_profile_rec,
} from "../model/User.js";

export const getProfile = async (req, res) => {
  const { uid } = req.params;
  try {
    const UserRole = await getrole(uid);
    if (UserRole[0].role === "INTERN") {
      const get_profile = await get_User_profile_intern(uid);
      return res.status(200).json({ success: get_profile });
    } else if (UserRole[0].role === "RECRUITER") {
      const get_profile = await get_User_profile_rec(uid);
      return res.status(200).json({ success: get_profile });
    }
    // if (getPost.length === 0)
    //   return res.status(400).json({ err: "Post Not Found" });
  } catch (err) {
    return res.status(400).json({ err: err });
  }
};
