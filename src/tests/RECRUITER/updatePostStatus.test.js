import request from "supertest";
import app from "../../app.js";

const pid = "t4j214";
const status = "CLOSED";
describe("Update Job Post Status", () => {
  const BASE_URL = "/api/recruiter/posts/1242/status?status=CLOSED";
  describe("api/recruiter/post/status : ", () => {
    describe("Loged In", () => {
      test("/post/status/:pid?status= : should return 200 status code", async () => {
        const response = await request(app).put(
          `${BASE_URL}/${pid}/status?status=${status}`
        );
        expect(response.statusCode).toBe(201);
        expect(res.body.status).toEqual("success");
        expect(res.body.data).toEqual(`Status Updated to ${status}`);
      });
    });
  });
});
