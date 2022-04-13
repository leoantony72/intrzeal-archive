import request from "supertest";
import app from "../../app.js";

describe("GET User Skills", () => {
  const BASE_URL = "/api/intern/users/skills";
  describe("api/intern/skills : ", () => {
    test("Get Skills : Loged In: should return 200 status code", async () => {
      const res = await request(app).get(`${BASE_URL}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
    // describe("Get Skills : Not Loged In", () => {
    //   test("/jobpost : should return 401 status code", async () => {
    //     const res = await request(app).get("/api/intern/skills");
    //     expect(res.statusCode).toBe(401);
    //   });
    // });
  });
});
