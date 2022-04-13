import {
  checkifApplied,
  createApplication,
  delApplication,
  getAppliedPost,
  getJobStatus,
} from "../../model/Intern/Applicant.js";

export class ApplicantService {
  jobStatus = async ({ pid }) => {
    const JobStatus = await getJobStatus(pid);
    return JobStatus;
  };

  getAppliedUsers = async ({ uid, page, limit }) => {
    const get_applied_Post = await getAppliedPost(uid, page, limit);
    return get_applied_Post;
  };

  checkIfApplied = async ({ uid, pid }) => {
    const checkifapplied = await checkifApplied(uid, pid);
    return checkifapplied;
  };
  applytoPost = async ({ uid, pid, description }) => {
    const isApplied = await this.checkIfApplied({ uid: uid, pid: pid });
    if (isApplied[0]) return { applied: true };

    const jobstatus = await this.jobStatus({ pid: pid });
    if (jobstatus[0].status === "CLOSED")
      return { closed: true, applied: false };
    const date = new Date();

    const applytoPost = await createApplication(uid, pid, description, date);
    return { applytoPost, closed: false, applied: false };
  };

  delApplication = async ({ uid, pid }) => {
    const isApplied = await this.checkIfApplied({ uid: uid, pid: pid });
    if (!isApplied[0]) return { applied: false };

    const delete_applied_Posts = await delApplication(pid, uid);
    return { applied: true };
  };
}
