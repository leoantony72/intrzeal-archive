import {
  getRole as role,
  getUserProfileIntern,
  getUserProfileRecruiter,
} from "../../model/public_routes/User.js";

export class UserService {
  getRole = async ({ uid }) => {
    const UserRole = await role(uid);
    return UserRole;
  };
  getUserProfile = async ({ uid }) => {
    const role = await this.getRole({ uid: uid });
    if (role[0].role === "INTERN") {
      const Userprofile = await getUserProfileIntern(uid);
      return { role:"INTERN",profile: Userprofile };
    } else if (role[0].role === "RECRUITER") {
      const Userprofile = await getUserProfileRecruiter(uid);
      return { role:"RECRUITER",profile: Userprofile };
    }
    return { err: "Profile Not Found" };
  };
}
