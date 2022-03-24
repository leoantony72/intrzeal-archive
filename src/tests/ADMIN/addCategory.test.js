import request from "supertest";
import app from "../../app.js";

describe("Add Category", () => {
  describe("api/admin/category : ", () => {
    describe("Category Provided", () => {
      test("/category : should return 200 status code", async () => {
        const response = await request(app)
          .post("/api/admin/category")
          .send({ category: "testing" });
        expect(response.statusCode).toBe(200);
      });
    });
    describe("Category Not Provided", () => {
      test("/posts : should return 400 status code", async () => {
        const response = await request(app)
          .post("/api/admin/category")
          .send({});
        expect(response.statusCode).toBe(400);
      });
    });
  });
});
