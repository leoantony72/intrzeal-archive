import request from "supertest";
import app from "../../app.js";

describe("GET Applicants", () => {
  describe("api/recruiter/applicants/:pid : ", () => {
    describe("Loged In", () => {
      test("/applicants/:pid : should return 200 status code", async () => {
        const response = await request(app).post(
          "api/recruiter/applicants/cl00kzojn00084gtm55bmlttj"
        );
        expect(response.statusCode).toBe(200);
      });
    });
  });
});
