import request from "supertest";
import app from "../../app.js";

const pid = "t4j214";
describe("del Post", () => {
  const BASE_URL = "/api/admin/post/";
  describe("api/admin/del-post : ", () => {
    test("del Post : VALID PID : should return 200 status code", async () => {
      const res = await request(app).delete(`${BASE_URL}${pid}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toBe("Job Post Deleted");
    });
    test("del Post : INVALID PID : should return 400 status code", async () => {
      const id = "2332";
      const res = await request(app).delete(`${BASE_URL}${id}`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe("Job Post Not Found");
    });
    test("del Post : NO PID Provided : should return 400 status code", async () => {
      const res = await request(app).delete(`${BASE_URL}`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe("Post ID Not Provided");
    });
  });
});
