import request from "supertest";
import app from "../../app.js";

describe("Update Job Post", () => {
  describe("api/recruiter/post : ", () => {
    describe("Loged In", () => {
      test("/post : should return 200 status code", async () => {
        const response = await request(app)
          .put("/api/recruiter/post/cl0yifnf600175htm3g0drcpm")
          .send({
            title: "blochchain1232 developer",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with",
            salary: 12000,
            job_experience: 2,
            category: [
              "cl0vt0d7a00002ytmbrpg1rpk",
              "ckzxpuge30010mdtmdu97vxw8",
            ],
          });
        expect(response.statusCode).toBe(201);
      });
    });
  });
});