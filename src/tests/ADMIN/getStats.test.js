import request from "supertest";
import app from "../../app.js";

describe("Get Stats", () => {
  describe("api/admin/stat : ", () => {
    test("/stat : should return 200 status code", async () => {
      const res = await request(app).get("/api/admin/stat");
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toHaveProperty("user");
      expect(res.body.data).toHaveProperty("post");
    });
  });
});
