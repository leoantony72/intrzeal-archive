import {
  ban,
  getUser,
  getUserById as usersById,
  getUserByRole as usersByRole,
  unBan,
} from "../../model/Admin/User.js";

export class UserService {
  banUser = async ({ uid }) => {
    const users = await ban(uid);
    return users;
  };
  unBanUser = async ({ uid }) => {
    const users = await unBan(uid);
    return users;
  };

  //@get Functions
  getUsers = async ({ page, limit }) => {
    const users = await getUser(page, limit);
    return users;
  };
  getUsersByRole = async ({ role, page, limit }) => {
    const users = await usersByRole(role, page, limit);
    return users;
  };
  getUserById = async ({ uid }) => {
    const users = await usersById(uid);
    return users;
  };
}
