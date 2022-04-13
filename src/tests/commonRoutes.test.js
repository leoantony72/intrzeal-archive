import request from "supertest";
import app from "../app.js";

const uid = "12$$";
const pid = "t4j214";
const cid = "testid";
describe("Common Endpoint /api/...", () => {
  describe("api/posts : ", () => {
    test("Get all Posts : should return 200 status code", async () => {
      const res = await request(app).get("/api/posts");
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
    test("Get Posts By Category : should return 200 status code", async () => {
      const res = await request(app).get(`/api/posts?category=${cid}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
    test("Get Post by VALID ID : should return 200 status code", async () => {
      const res = await request(app).get(`/api/posts/${pid}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
    test("Get Post by INVALID ID : should return 400 status code", async () => {
      const pid = "123";
      const res = await request(app).get(`/api/posts/${pid}`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toEqual("Post Not Found");
    });
  });

  describe("api/category : ", () => {
    test("Get All Category : should return 200 status code", async () => {
      const res = await request(app).get("/api/category");
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
    });
    test("Get Category by VALID ID : should return 200 status code", async () => {
      const res = await request(app).get(`/api/category/${cid}`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body).toHaveProperty("data");
      expect(res.body.data[0].id).toEqual(cid);
    });

    test("Get Category by INVALID ID : should return 400 status code", async () => {
      const id = "testid12";
      const res = await request(app).get(`/api/category/${id}`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toEqual("Category Not Found");
    });
  });
  describe("/api/users/:uid/profile :", () => {
    test("Get user Profile by VALID ID : should return 200 status code", async () => {
      const res = await request(app).get(`/api/users/${uid}/profile`);
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toEqual("success");
      expect(res.body.data[0].id).toEqual(uid);
    });

    test("Get user Profile by INVALID)  ID : should return 400 status code", async () => {
      let id = "124";
      const res = await request(app).get(`/api/users/${id}/profile`);
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toEqual(`User :${id} Not Found`);
    });
  });
});
