import request from "supertest";
import app from "../../app.js";

describe("del Post", () => {
  describe("api/admin/del-post : ", () => {
    describe("del Post : VALID PID", () => {
      test("/del-post : should return 200 status code", async () => {
        const response = await request(app).delete(
          "/api/admin/del-post?pid=cl0yhpzj3001041tmtjpeutmc"
        );
        expect(response.statusCode).toBe(200);
      });
    });
    describe("del Post : INVALID PID", () => {
      test("/del-post : should return 400 status code", async () => {
        const response = await request(app).delete(
          "/api/admin/del-post?pid=cl0yig7nz00255htma2cp43"
        );
        expect(response.statusCode).toBe(400);
      });
    });
    describe("del Post : NO PID Provided", () => {
      test("/del-post : should return 400 status code", async () => {
        const response = await request(app).delete("/api/admin/del-post");
        expect(response.statusCode).toBe(400);
      });
    });
  });
});
