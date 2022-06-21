import { ApplicantService } from "../../services/Intern/ApplicantService";

const applicantInstance = new ApplicantService();
describe("Intern : Applicant", () => {
  const uid = "1err";
  const pid = "456post";

  test("Job Status", async () => {
    const status = await applicantInstance.jobStatus({ pid: pid });
    expect(status.status === "CLOSED" || status.status === "OPEN");
  });

  test("apply to post", async () => {
    const desc = "testing apply to post";
    const apply = await applicantInstance.applytoPost({
      uid: uid,
      pid: pid,
      description: desc,
    });
    expect(apply.closed == false);
    expect(apply.applied == false);
    expect(apply.applytoPost.user_id);
  });

  test("get Applied posts", async () => {
    const page = 0;
    const limit = 5;
    const posts = await applicantInstance.getAppliedPosts({ uid, page, limit });
    expect(posts[0].post_id);
    expect(posts[0].title);
  });

  test("checkIfApplied", async () => {
    const applied = await applicantInstance.checkIfApplied({
      uid: uid,
      pid: pid,
    });
    expect(applied.status);
    expect(applied.created_at);
  });

  test("delete application", async () => {
    const application = await applicantInstance.delApplication({
      uid: uid,
      pid: pid,
    });
    expect(application.applied == true);
  });
});
