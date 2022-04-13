import { UserService } from "../../services/Admin/UserService.js";

const UserServiceInstance = new UserService();

export const banUsers = async (req, res) => {
  const { uid } = req.params;
  try {
    const banuser = await UserServiceInstance.banUser({ uid: uid });
    if (!banuser.id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something went wrong" });

    return res
      .status(200)
      .json({ status: "success", data: `User :${uid} Banned` });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err });
  }
};

export const unbanUsers = async (req, res) => {
  const { uid } = req.params;
  try {
    const unbanuser = await UserServiceInstance.unbanUser({ uid: uid });
    if (!unbanuser.id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something went wrong" });

    return res
      .status(200)
      .json({ status: "success", data: `User :${uid} Unbanned` });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err });
  }
};
