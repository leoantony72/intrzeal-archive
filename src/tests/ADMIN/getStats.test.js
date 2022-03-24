import request from "supertest";
import app from "../../app.js";

describe("Get Stats", () => {
  describe("api/admin/stat : ", () => {
    describe("Get stats", () => {
      test("/stat : should return 200 status code", async () => {
        const response = await request(app).get("/api/admin/stat");
        expect(response.statusCode).toBe(200);
      });
    });
  });
});
