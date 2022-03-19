import { User } from "../../model/Admin/User.js";

export const getUsers = async (req, res) => {
  const { role } = req.query;
  try {
    if (role) {
      if (role !== "INTERN")
        if (role !== "RECRUITER")
          return res.status(400).json({ data: { err: "Role Not Found" } });

      const getUserbyrole = await User.getUser_by_role(role);
      return res.json({ data: { success: getUserbyrole } });
    }

    const getUsers = await User.getUser();
    return res.json({ data: { success: getUsers } });
  } catch (err) {
    return res.status(400).json({ data: { err: err.message } });
  }
};

export const getUsersbyID = async (req, res) => {
  const { uid } = req.query;
  try {
    const getUserbyID = await User.getUser_by_ID(uid);

    return res.json({ data: { success: getUserbyID } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};
