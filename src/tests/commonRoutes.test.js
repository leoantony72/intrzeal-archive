import request from "supertest";
import app from "../app.js";

describe("Common Endpoint /api/...", () => {
  describe("api/posts : ", () => {
    describe("Get all Posts", () => {
      test("/posts : should return 200 status code", async () => {
        const response = await request(app).get("/api/posts");
        expect(response.statusCode).toBe(200);
      });
    });
    describe("Get Post by ID(valid)", () => {
      test("/post/:pid : should return 200 status code", async () => {
        const pid = "cl00kzojn00084gtm55bmlttj";
        const response = await request(app).get(`/api/post/${pid}`);
        expect(response.statusCode).toBe(200);
      });
    });
    describe("Get Post by ID(InvalidValid)", () => {
      test("/post/:pid : should return 400 status code", async () => {
        const pid = "123";
        const response = await request(app).get(`/api/post/${pid}`);
        console.log(response);
        expect(response.statusCode).toBe(400);
      });
    });
  });
  describe("api/category : ", () => {
    describe("Get All Category : ", () => {
      test("/category : should return 200 status code", async () => {
        const response = await request(app).get("/api/category");
        expect(response.statusCode).toBe(200);
      });
    });
    describe("Get Category by ID(VALID) : ", () => {
      test("/category : should return 200 status code", async () => {
        const id = "cl0vsa4ik00008dtmiitkkt9x";
        const response = await request(app).get(`/api/category/${id}`);
        expect(response.statusCode).toBe(200);
      });
    });
    describe("Get Category by ID(INVALID) : ", () => {
      test("/category : should return 400 status code", async () => {
        const id = "cl0vsa4ik00008dtmii";
        const response = await request(app).get(`/api/category/${id}`);
        expect(response.statusCode).toBe(400);
      });
    });
  });
});
