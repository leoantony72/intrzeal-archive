import request from "supertest";
import app from "../../app.js";

describe("UPDATE Application Status", () => {
  describe("api/recruiter/hire?pid= : ", () => {
    describe("Loged In", () => {
      test("/hire?pid= : should return 200 status code", async () => {
        const response = await request(app).put(
          "api/recruiter/hire?pid=cl00kzojn00084gtm55bmlttj"
        );
        expect(response.statusCode).toBe(200);
      });
    });
  });
});
