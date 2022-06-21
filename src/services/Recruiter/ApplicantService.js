import { postOwner } from "../../model/Recruiter/Post.js";
import {
  getAppliedUsers,
  isUserApplied,
  updateApplicantStatus,
} from "../../model/Recruiter/Applicant.js";

export class ApplicantService {
  Owner = async ({ pid }) => {
    return await postOwner(pid);
  };
  getApplied = async ({ uid, pid, page, limit }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != uid) return { owner: false };
    const getUsers = await getAppliedUsers(uid, pid, page, limit);
    return { getUsers, owner: true };
  };

  userApplied = async ({ uid, pid }) => {
    return await isUserApplied(uid, pid);
  };

  updateApplicantStatus = async ({ uid, pid, loggedInUser }) => {
    const owner = await this.Owner({ pid: pid });
    if (owner[0].user_id != loggedInUser) return { owner: false };

    const applied = await this.userApplied({ uid: uid, pid: pid });

    if (!applied[0]) return { owner: true, applied: false };

    const applicant = await updateApplicantStatus(pid, uid);
    return { applicant, owner: true, applied: true };
  };
}
