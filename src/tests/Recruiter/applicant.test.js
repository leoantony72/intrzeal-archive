import { ApplicantService } from "../../services/Recruiter/ApplicantService.js";
import { ApplicantService as applicant } from "../../services/Intern/ApplicantService";

const ApplicantServiceInstance = new ApplicantService();
const applicantInstance = new applicant();

describe("Recruiter : applicants", () => {
  const pid = "456post";
  const uid = "xx1";
  test("Check Post Owner", async () => {
    const owner = await ApplicantServiceInstance.Owner({ pid: pid });
    expect(owner.user_id);
  });
  test("Get Applied Users : Owner true", async () => {
    const limit = 2;
    const page = 0;
    const desc = "testing apply to post";
    const apply = await applicantInstance.applyToPost({
      uid: "xx2",
      pid: "456post",
      description: desc,
    });
    const users = await ApplicantServiceInstance.getApplied({
      uid,
      pid,
      page,
      limit,
    });
    expect(users.owner == true);
    expect(users.getUsers[0].post_id == pid); //post_id,a.user_id
    expect(users.getUsers[0].user_id == "xx2");
  });
  test("Get Applied Users : Owner false", async () => {
    const limit = 2;
    const page = 0;
    const users = await ApplicantServiceInstance.getApplied({
      uid:"xx2",
      pid: pid,
      page:page,
      limit:limit,
    });
    expect(users.owner == false);
  });
  test("Is User Applied", async () => {
    const isapplied = await ApplicantServiceInstance.userApplied({
      uid: uid,
      pid: pid,
    });
    expect(isapplied.applied == false);
  });

  describe("Update Appliant Job Status", () => {
    test("Owner: true ,Applied : true", async () => {
      const desc = "testing apply to post";
      const apply = await applicantInstance.applyToPost({
        uid: "xx2",
        pid: "456post",
        description: desc,
      });

      const user = "xx2"; // the userid which we get from the client
      const updateJobStatus =
        await ApplicantServiceInstance.updateApplicantStatus({
          uid: "xx2", //intern
          pid: "456post", //post
          loggedInUser: "xx1", //current user
        });
      expect(updateJobStatus.applicant[0].user_id); //{ applicant, owner: true, applied: true }
      expect(updateJobStatus.owner == true);
      expect(updateJobStatus.applied == true);
    });

    test("Owner: false", async () => {
      const user = "xx2";
      const updateJobStatus =
        await ApplicantServiceInstance.updateApplicantStatus({
          uid: uid, //intern
          pid: pid, //post
          loggedInUser: user, //current user
        });
      expect(updateJobStatus.owner == false);
    });

    test("Owner: true ,Applied : false", async () => {
      const user = "xx3";
      const updateJobStatus =
        await ApplicantServiceInstance.updateApplicantStatus({
          uid: user,
          pid: pid,
          loggedInUser: uid,
        });
      expect(updateJobStatus.owner == true);
      expect(updateJobStatus.applied == false);
    });
  });
});
