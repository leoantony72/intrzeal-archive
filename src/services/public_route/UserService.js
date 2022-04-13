import {
  getrole,
  get_User_profile_intern,
  get_User_profile_rec,
} from "../../model/User.js";

export class UserService {
  getRole = async ({ uid }) => {
    const UserRole = await getrole(uid);
    return UserRole;
  };
  getUserProfile = async ({ uid }) => {
    const role = await this.getRole({ uid: uid });
    if (role[0].role === "INTERN") {
      const Userprofile = await get_User_profile_intern(uid);
      return { Userprofile, role: role[0].role };
    } else if (role[0].role === "RECRUITER") {
      const Userprofile = await get_User_profile_rec(uid);
      return { Userprofile, role: role[0].role };
    }

    return {err:"Profile Not Found"}
  };
}
