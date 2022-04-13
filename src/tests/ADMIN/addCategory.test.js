import request from "supertest";
import app from "../../app.js";
import { delCategories } from "../../model/tests/Category.js";

const category = "testing123";
describe("Add Category", () => {
  describe("api/admin/category : ", () => {
    test("Category Provided : should return 200 status code", async () => {
      const res = await request(app)
      .post("/api/admin/category")
      .send({ category: category });
      console.log(res.body)
      expect(res.statusCode).toBe(201);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toEqual("Category Added");
    });
    test("Category Not Provided : should return 400 status code", async () => {
      const res = await request(app).post("/api/admin/category").send({});
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toEqual("Category Not Provided");
    });
    test("Category Already Added : should return 400 status code", async () => {
      const res = await request(app)
        .post("/api/admin/category")
        .send({ category: category });
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toEqual(`${category} Already Added`);
    });
    test("Unauthorized User : should return 400 status code", async () => {
      const res = await request(app)
        .post("/api/admin/category")
        .send({ category: category });
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toEqual(`${category} Already Added`);
    });
  });
  afterAll(async () => {
    const delCategory = await delCategories(category);
  });
});
