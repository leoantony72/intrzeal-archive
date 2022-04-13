import request from "supertest";
import app from "../../app.js";

const uid = "12$$";
describe("Get Users", () => {
  const BASE_URL = "/api/admin/users";
  describe("api/admin/users : ", () => {
    test("Get all users (INTERN,RECRUITER) : should return 200 status code", async () => {
      const res = await request(app).get(`${BASE_URL}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
    test("Get all users (INTERN): should return 200 status code", async () => {
      const res = await request(app).get(`${BASE_URL}?role=INTERN`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
    test("Get all users (RECRUITER) : should return 200 status code", async () => {
      const res = await request(app).get(`${BASE_URL}?role=RECRUITER`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
  });

  describe("Get user by ID", () => {
    test("Valid User ID: should return 200 status code", async () => {
      const res = await request(app).get(`${BASE_URL}/${uid}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
    test("InValid User ID : should return 400 status code", async () => {
      const id = "1231";
      const res = await request(app).get(`${BASE_URL}/${id}`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe(`User :${id} Not Found`);
    });
  });
});
