import request from "supertest";
import app from "../../app.js";

describe("Update Job Post Status", () => {
  describe("api/recruiter/post/status : ", () => {
    describe("Loged In", () => {
      test("/post/status/:pid?status= : should return 200 status code", async () => {
        const response = await request(app)
          .put(
            "/api/recruiter/post/status/cl0yifnf600175htm3g0drcpm?status=CLOSED"
          )
        expect(response.statusCode).toBe(201);
      });
    });
  });
});
