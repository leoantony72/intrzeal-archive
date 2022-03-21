import { ban, unban } from "../../model/Admin/User.js";

export const banUsers = async (req, res) => {
  const { uid } = req.query;
  try {
    const banuser = await ban(uid);
    if (!banuser.id)
      return res.status(400).json({ data: { err: "Something went wrong" } });

    return res.json({ data: { success: "User :" + uid + " Banned" } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};

export const unbanUsers = async (req, res) => {
  const { uid } = req.query;
  try {
    const unbanuser = await unban(uid);
    if (!unbanuser.id)
      return res.status(400).json({ data: { err: "Something went wrong" } });

    return res.json({ data: { success: "User :" + uid + " Unbanned" } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
