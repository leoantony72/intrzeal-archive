import request from "supertest";
import app from "../../app.js";

const cid = "testid";
describe("Create Job Post", () => {
  const BASE_URL = "/api/recruiter/posts";
  describe("Loged In", () => {
    test("Fields Provided : should return 200 status code", async () => {
      const response = await request(app)
        .post(`${BASE_URL}`)
        .send({
          title: "blochchain123 developer",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with",
          salary: 12000,
          job_experience: 2,
          category: [cid],
        });
      expect(response.statusCode).toBe(201);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toBe("Job Post Added");
    });
  });
});
