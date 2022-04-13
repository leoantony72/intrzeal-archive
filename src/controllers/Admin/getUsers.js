import { UserService } from "../../services/Admin/UserService.js";

const UserServiceInstance = new UserService();
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
      const getUsersbyrole = await UserServiceInstance.getUsersbyRole({
        role: role,
        page: page,
        limit: limit,
      });

      return res.status(200).json({
        status: "success",
        current_page: page,
        next_page: `http://localhost:1500/api/admin/users?page=${page + 1}`,
        prev_page: `http://localhost:1500/api/admin/users?page=${
          page == 0 ? 0 : page - 1
        }`,
        data: getUsersbyrole,
      });
    }
    const getUsers = await UserServiceInstance.getUsers({
      page: page,
      limit: limit,
    });
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
    const getUsers = await UserServiceInstance.getUserbyId({ uid: uid });

    return res.status(200).json({ status: "success", data: getUsers });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ status: "failed", err: err });
  }
};
