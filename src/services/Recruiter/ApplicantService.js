import { getApplied_User } from "../../model/Recruiter/Applicant.js";
import { postOwner } from "../../model/Recruiter/Post.js";
import {
  checkIfUserApplied,
  updateApplicant_Status,
} from "../../model/Recruiter/Applicant.js";

export class ApplicantService {
  Owner = async ({ pid }) => {
    return await postOwner(pid);
  };
  getApplied = async ({ uid, pid, page, limit }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };
    const getUsers = await getApplied_User(uid, pid, page, limit);
    return { getUsers, owner: true };
  };

  userApplied = async ({ uid, pid }) => {
    return await checkIfUserApplied(uid, pid);
  };

  updateApplicantStatus = async ({ uid, pid, loggedIn_user }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != loggedIn_user) return { owner: false };
    const applied = await this.userApplied({ uid: uid, pid: pid });
    if (!applied[0]) return { owner: true, applied: false };

    const applicant = await updateApplicant_Status(pid, uid);
    return { applicant, owner: true, applied: true };
  };
}
