import { ApplicantService } from "../../services/Intern/ApplicantService";
import { PostService } from "../../services/Recruiter/PostService.js";

const PostServiceInstance = new PostService();
const applicantInstance = new ApplicantService();
describe("Intern : Applicant", () => {
  const uid = "xx1";
  const pid = "456post";

  test("Job Status", async () => {
    const status = await applicantInstance.jobStatus({ pid: pid });
    expect(status.status === "CLOSED" || status.status === "OPEN");
  });

  test("apply to post : status open", async () => {
    const desc = "testing apply to post";
    const apply = await applicantInstance.applyToPost({
      uid: uid,
      pid: pid,
      description: desc,
    });
    expect(apply.closed == false);
    expect(apply.applied == false);
    expect(apply.post.user_id);
  });

  test("apply to post : status closed", async () => {
    const updateStatus = await PostServiceInstance.updateStatus({
      pid: "89post",
      uid: "xx1",
      status: "CLOSED",
    });

    const desc = "testing apply to post";
    const apply = await applicantInstance.applyToPost({
      uid: "xx2",
      pid: "89post",
      description: desc,
    });
    expect(apply.closed == true);

    const revertStatus = await PostServiceInstance.updateStatus({
      pid: pid,
      uid: "xx1",
      status: "OPEN",
    });
  });

  test("get Applied posts", async () => {
    const page = 0;
    const limit = 5;
    const posts = await applicantInstance.getAppliedPosts({ uid, page, limit });
    expect(posts[0].post_id);
    expect(posts[0].title);
  });

  test("checkIfApplied", async () => {
    const applied = await applicantInstance.isApplied({
      uid: uid,
      pid: pid,
    });
    expect(applied.status);
    expect(applied.created_at);
  });

  test("delete application : Applied true", async () => {
    const application = await applicantInstance.deleteApplication({
      uid: uid,
      pid: pid,
    });
    expect(application.applied == true);
  });
  test("delete application : Applied false", async () => {
    const application = await applicantInstance.deleteApplication({
      uid: "xx2",
      pid: pid,
    });
    expect(application.applied == false);
  });
});
