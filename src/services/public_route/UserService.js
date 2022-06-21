import {
  getRole as role,
  getUserProfileIntern,
  getUserProfileRecruiter,
} from "../../model/User.js";

export class UserService {
  getRole = async ({ uid }) => {
    const UserRole = await role(uid);
    return UserRole;
  };
  getUserProfile = async ({ uid, role }) => {
    if (role === "INTERN") {
      const Userprofile = await getUserProfileIntern(uid);
      return { profile: Userprofile };
    } else if (role === "RECRUITER") {
      const Userprofile = await getUserProfileRecruiter(uid);
      return { profile: Userprofile };
    }

    return { err: "Profile Not Found" };
  };
}
