import { ban, unban } from "../../model/Admin/User.js";

export const banUsers = async (req, res) => {
  const { uid } = req.params;
  try {
    const banuser = await ban(uid);
    if (!banuser.id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something went wrong" });

    return res
      .status(201)
      .json({ status: "success", data: `User :${uid} Banned` });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err });
  }
};

export const unbanUsers = async (req, res) => {
  const { uid } = req.params;
  try {
    const unbanuser = await unban(uid);
    if (!unbanuser.id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something went wrong" });

    return res
      .status(201)
      .json({ status: "success", data: `User : ${uid} Unbanned` });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ status: "failed", err: err });
  }
};
