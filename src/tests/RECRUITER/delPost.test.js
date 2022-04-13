import request from "supertest";
import app from "../../app.js";
import { create_Post } from "../../model/Recruiter/Post.js";

const pid = "12313";
describe("DELETE Job Post", () => {
  const BASE_URL = "/api/recruiter/posts";
  describe("api/recruiter/post : ", () => {
    describe("Loged In", () => {
      test("Valid PostID : should return 201 status code", async () => {
        const post = {
          id: pid,
          uid: "1",
          title: "Blockchain dev",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with",
          salary: 1200,
          job_experience: 1,
          date: new Date(),
          category: [cid],
        };
        const createPost = await create_Post(post);
        const response = await request(app).delete(`${BASE_URL}/${pid}`);
        expect(response.statusCode).toBe(200);
        expect(res.body.status).toEqual("success");
        expect(res.body.data).toBe("Job Post Deleted");
      });
    });
  });
});
