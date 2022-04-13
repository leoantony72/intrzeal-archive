import request from "supertest";
import app from "../../app.js";

const pid = "t4j214";
const cid = "testid";
describe("ADD Individual Category", () => {
  const BASE_URL = "/api/recruiter/posts/";
  describe("api/recruiter/post/category/:pid : ", () => {
    test("Category & PID Provided: should return 201 status code", async () => {
      const response = await request(app)
        .post(`${BASE_URL}/${pid}/category`)
        .send({
          category: [cid],
        });
      expect(response.statusCode).toBe(201);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toBe("Category Added");
    });
    test("Category & PID Not Provided: should return 400 status code", async () => {
      const response = await request(app)
        .post(`${BASE_URL}/${pid}/category`)
        .send({
          category: [cid],
        });
      expect(response.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe("PID Not Provided");
    });
    test("Category Not Provided & PID Provided: should return 400 status code", async () => {
      const response = await request(app)
        .post(`${BASE_URL}/${pid}/category`)
        .send({});
      expect(response.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe("Category Not Provided");
    });
  });
});
