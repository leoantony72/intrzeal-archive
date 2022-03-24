import request from "supertest";
import app from "../../app.js";

describe("DELETE Job Post", () => {
  describe("api/recruiter/post : ", () => {
    describe("Loged In", () => {
      test("/post : should return 201 status code", async () => {
        const response = await request(app)
          .delete("/api/recruiter/post/cl0yhuqxx0001g9tmpjb5hj6e")
          .send({
            title: "blochchain123 developer",
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
