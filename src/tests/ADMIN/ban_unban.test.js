import request from "supertest";
import app from "../../app.js";

const uid = "12$$";
describe("Ban/UnBan Users", () => {
  describe("api/admin/ban : ", () => {
    const BASE_URL = "/api/admin/users/ban/";
    test("Ban User : VALID UID : should return 200 status code", async () => {
      const res = await request(app).put(`${BASE_URL}${uid}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toBe(`User :${uid} Banned`);
    });
    test("Ban User : INVALID UID : should return 400 status code", async () => {
      const id = "12";
      const res = await request(app).put(`${BASE_URL}${id}`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe(`User :${id} Not Found`);
    });
    test("Ban User : NO UID Provided : should return 400 status code", async () => {
      const res = await request(app).put(`${BASE_URL}`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe(`UID Not Provided`);
    });
  });

  describe("api/admin/unban : ", () => {
    const BASE_URL = "/api/admin/users/unban/";
    test("UnBan User : VALID UID : should return 200 status code", async () => {
      const res = await request(app).put(`${BASE_URL}${uid}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toBe(`User :${uid} Unbanned`);
    });
    test("UnBan User : INVALID UID : should return 400 status code", async () => {
      const id = "211";
      const res = await request(app).put(`${BASE_URL}${id}`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe(`User :${id} Not Found`);
    });
    test("UnBan User : NO UID Provided : should return 400 status code", async () => {
      const res = await request(app).put(`${BASE_URL}`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe(`UID Not Provided`);
    });
  });
});
