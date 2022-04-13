import {
  getrole,
  get_User_profile_intern,
  get_User_profile_rec,
} from "../model/User.js";
import { UserService } from "../services/public_route/UserService.js";

const UserServiceInstance = new UserService();
export const getProfile = async (req, res) => {
  const { uid } = req.params;
  try {
    const UserRole = await UserServiceInstance.getUserProfile({ uid: uid });
    if (UserRole.role === "INTERN") {
      return res
        .status(200)
        .json({ status: "success", data: UserRole.Userprofile });
    } else if (UserRole.role === "RECRUITER") {
      return res
        .status(200)
        .json({ status: "success", data: UserRole.Userprofile });
    } else if (UserRole.err) return res.status(400).json({ err: UserRole.err });
    // if (getPost.length === 0)
    //   return res.status(400).json({ err: "Post Not Found" });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: "Something Went Wrong" });
  }
};
