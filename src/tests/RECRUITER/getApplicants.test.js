import request from "supertest";
import app from "../../app.js";

describe("GET Applicants", () => {
  const BASE_URL = "/api/recruiter/posts";
  describe("api/recruiter/applicants/:pid : ", () => {
    test("PID Provided : should return 200 status code", async () => {
      const response = await request(app).get(`${BASE_URL}/${pid}/applicants`);
      expect(response.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
    test("PID Not Provided : should return 200 status code", async () => {
      const response = await request(app).get(`${BASE_URL}/${pid}/applicants`);
      expect(response.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toEqual("PID Not Provided");
    });
  });
});
