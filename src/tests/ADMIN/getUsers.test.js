import request from "supertest";
import app from "../../app.js";

describe("Get Users", () => {
  describe("api/admin/users : ", () => {
    describe("Get all users (INTERN,RECRUITER)", () => {
      test("/users : should return 200 status code", async () => {
        const response = await request(app).get("/api/admin/users");
        expect(response.statusCode).toBe(200);
      });
    });
    describe("Get all users (INTERN)", () => {
      test("/users : should return 200 status code", async () => {
        const response = await request(app).get("/api/admin/users?role=INTERN");
        expect(response.statusCode).toBe(200);
      });
    });
    describe("Get all users (RECRUITER)", () => {
      test("/users : should return 200 status code", async () => {
        const response = await request(app).get(
          "/api/admin/users?role=RECRUITER"
        );
        expect(response.statusCode).toBe(200);
      });
    });
  });
  describe("api/admin/user : ", () => {
    describe("Get user by ID", () => {
      describe("Valid User ID", () => {
        test("/user?uid= : should return 200 status code", async () => {
          const response = await request(app).get("/api/admin/user?uid=123");
          expect(response.statusCode).toBe(200);
        });
      });
      describe("InValid User ID", () => {
        test("/user?uid= : should return 200 status code", async () => {
          const response = await request(app).get("/api/admin/user?uid=12");
          expect(response.statusCode).toBe(200);
        });
      });
    });
  });
});
