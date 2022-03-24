import {
  getUser,
  getUser_by_ID,
  getUser_by_role,
} from "../../model/Admin/User.js";

export const getUsers = async (req, res) => {
  const { role } = req.query;
  try {
    if (role) {
      if (role !== "INTERN")
        if (role !== "RECRUITER")
          return res.status(400).json({ err: "Role Not Found" });

      const getUserbyrole = await getUser_by_role(role);
      return res.status(200).json({ success: getUserbyrole });
    }

    const getUsers = await getUser();
    return res.status(200).json({ success: getUsers });
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

export const getUsersbyID = async (req, res) => {
  const { uid } = req.params;
  try {
    const getUserbyID = await getUser_by_ID(uid);

    return res.status(200).json({ success: getUserbyID });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ err: err });
  }
};
