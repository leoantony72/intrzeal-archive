import { UserService } from "../../services/public_route/UserService.js";

const UserServiceInstance = new UserService();

export const getProfile = async (req, res) => {
  const { uid } = req.params;

  try {
    const getProfile = await UserServiceInstance.getUserProfile({
      uid: uid,
    });

    const data = {
      status: "success",
      profile: getProfile.profile,
    };

    // return res.status(200).json(data);

    // const getProfile = await UserServiceInstance.getUserProfile({ uid: uid });
    if (getProfile.role === "INTERN") {
      return res
        .status(200)
        .json({ status: "success", data: getProfile.profile });
    } else if (getProfile.role === "RECRUITER") {
      return res
        .status(200)
        .json({ status: "success", data: getProfile.profile });
    } else if (getProfile.err) return res.status(400).json({ err: getProfile.err });
    if (getProfile.length === 0)
      return res.status(400).json({ err: "Post Not Found" });
      
  } catch (err) {
    return res
      .status(400)
      .json({ status: "failed", err: "Something Went Wrong" });
  }
};
