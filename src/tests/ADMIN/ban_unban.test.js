import request from "supertest";
import app from "../../app.js";

describe("Ban/UnBan Users", () => {
  describe("api/admin/ban : ", () => {
    describe("Ban User : VALID UID", () => {
      test("/ban : should return 200 status code", async () => {
        const response = await request(app).put("/api/admin/ban?uid=155");
        expect(response.statusCode).toBe(200);
      });
    });
    describe("Ban User : INVALID UID", () => {
      test("/ban : should return 200 status code", async () => {
        const response = await request(app).put("/api/admin/ban?uid=15");
        expect(response.statusCode).toBe(400);
      });
    });
    describe("Ban User : NO UID Provided", () => {
      test("/ban : should return 200 status code", async () => {
        const response = await request(app).put("/api/admin/ban");
        expect(response.statusCode).toBe(400);
      });
    });
  });

  describe("api/admin/unban : ", () => {
    describe("UnBan User : VALID UID", () => {
      test("/unban : should return 400 status code", async () => {
        const response = await request(app).put("/api/admin/unban?uid=155");
        expect(response.statusCode).toBe(200);
      });
    });
    describe("UnBan User : INVALID UID", () => {
      test("/unban : should return 400 status code", async () => {
        const response = await request(app).put("/api/admin/unban?uid=15");
        expect(response.statusCode).toBe(400);
      });
    });
    describe("UnBan User : NO UID Provided", () => {
      test("/unban : should return 400 status code", async () => {
        const response = await request(app).put("/api/admin/unban");
        expect(response.statusCode).toBe(400);
      });
    });
  });
});
