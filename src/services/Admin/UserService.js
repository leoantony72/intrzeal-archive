import {
  ban,
  getUser,
  getUser_by_ID,
  getUser_by_role,
  unban,
} from "../../model/Admin/User.js";

export class UserService {
  banUser = async ({ uid }) => {
    const banuser = await ban(uid);
    return banuser;
  };
  unbanUser = async ({ uid }) => {
    const unbanuser = await unban(uid);
    return unbanuser;
  };
  getUsers = async ({ page, limit }) => {
    const getUsers = await getUser(page, limit);
    return getUsers;
  };
  getUsersbyRole = async ({ role, page, limit }) => {
    const getUsers = await getUser_by_role(role, page, limit);
    return getUsers;
  };
  getUserbyId = async ({ uid }) => {
    const getUserbyID = await getUser_by_ID(uid);
    return getUserbyID;
  };
}
