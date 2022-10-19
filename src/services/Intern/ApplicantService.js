import {
  checkIfApplied,
  createApplication,
  deleteApplication as delApplication,
  getAppliedPost,
  getJobStatus,
} from "../../model/Intern/Applicant.js";

export class ApplicantService {
  jobStatus = async ({ pid }) => {
    const jobStatus = await getJobStatus(pid);
    return jobStatus;
  };

  getAppliedPosts = async ({ uid, page, limit }) => {
    const posts = await getAppliedPost(uid, page, limit);
    return posts;
  };

  isApplied = async ({ uid, pid }) => {
    const applied = await checkIfApplied(uid, pid);
    return applied;
  };
  applyToPost = async ({ uid, pid, description }) => {
    const isApplied = await this.isApplied({ uid: uid, pid: pid });
    if (isApplied[0]) return { applied: true };

    const status = await this.jobStatus({ pid: pid });
    if (status[0].status === "CLOSED") return { closed: true, applied: false };
    const date = new Date();

    const post = await createApplication(uid, pid, description, date);
    return { post, closed: false, applied: false };
  };

  deleteApplication = async ({ uid, pid }) => {
    const isApplied = await this.isApplied({ uid: uid, pid: pid });
    if (!isApplied[0]) return { applied: false };

    const deleteAppliedPosts = await delApplication(pid, uid);
    return { applied: true };
  };
}
