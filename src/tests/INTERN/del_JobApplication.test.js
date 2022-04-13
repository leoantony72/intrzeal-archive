import request from "supertest";
import app from "../../app.js";
import { createApplication } from "../../model/Intern/Applicant.js";
import { create_Post, delPost } from "../../model/Recruiter/Post.js";

const pid = "test435";
const uid = "12$$";
const cid = "testid";
describe("DEL Job Application", () => {
  const BASE_URL = "/api/intern/apply/posts";
  describe("api/intern/jobpost : ", () => {
    test("Loged In & PID Provided : should return 200 status code", async () => {
      const date = new Date();
      const post = {
        id: pid,
        uid: uid,
        title: "Blockchain dev",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with",
        salary: 1200,
        job_experience: 1,
        date: new Date(),
        category: [cid],
      };
      const createPost = await create_Post(post);
      const createApplications = await createApplication(
        "1",
        pid,
        "testing route",
        date
      );
      const res = await request(app).del(`${BASE_URL}/${pid}`);
      console.log(res.body);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toBe("application deleted");
    });
    // describe("Not Loged In & PID Provided", () => {
    //   test("/jobpost/:pid : should return 401 status code", async () => {
    //     const res = await request(app).del(
    //       "/api/intern/jobpost/cl07knsh90002lbtm7i2cphtq"
    //     );
    //     expect(res.statusCode).toBe(401);
    //   });
    // });
    test("Loged In & PID Not Provided : should return 401 status code", async () => {
      const res = await request(app).del(`${BASE_URL}/`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.data).toBe("PID Not Provided");
    });
  });
  afterAll(async () => {
    const delPosts = await delPost(pid, uid);
  });
});
