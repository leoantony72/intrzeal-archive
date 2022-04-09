import {
  getUser,
  getUser_by_ID,
  getUser_by_role,
} from "../../model/Admin/User.js";

export const getUsers = async (req, res) => {
  const { role } = req.query;
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);

  if (!limit) limit = 10;
  if (!page) page = 0;
  if (limit <= 0) limit = 10;
  if (page < 0) page = 0;
  try {
    if (role) {
      if (role !== "INTERN")
        if (role !== "RECRUITER")
          return res
            .status(400)
            .json({ status: "failed", err: "Role Not Found" });
      const getUserbyrole = await getUser_by_role(role, page, limit);
      return res.status(200).json({
        status: "success",
        current_page: page,
        next_page: `http://localhost:1500/api/admin/users?page=${page + 1}`,
        prev_page: `http://localhost:1500/api/admin/users?page=${
          page == 0 ? 0 : page - 1
        }`,
        data: getUserbyrole,
      });
    }
    const getUsers = await getUser(page, limit);
    return res.status(200).json({
      status: "success",
      current_page: page,
      next_page: `http://localhost:1500/api/admin/users?page=${page + 1}`,
      prev_page: `http://localhost:1500/api/admin/users?page=${
        page == 0 ? 0 : page - 1
      }`,
      data: getUsers,
    });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};

export const getUsersbyID = async (req, res) => {
  const { uid } = req.params;
  try {
    const getUserbyID = await getUser_by_ID(uid);

    return res.status(200).json({ status: "success", data: getUserbyID });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ status: "failed", err: err });
  }
};
