import request from "supertest";
import app from "../../app.js";
import { delApplication } from "../../model/Intern/Applicant.js";

const pid = "t4j214";
describe("Apply to Job Post", () => {
  const BASE_URL = "/api/intern/apply/posts";
  describe("api/intern/jobpost : ", () => {
    test("Loged In & PID Provided : should return 201 status code", async () => {
      const res = await request(app).post(`${BASE_URL}/${pid}`).send({
        description: "testing description for job apply route",
      });
      expect(res.statusCode).toBe(201);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toBe("Applied to job");
    });
    // describe("Not Loged In & PID Provided", () => {
    //   test("/jobpost/:pid : should return 401 status code", async () => {
    //     const res = await request(app)
    //       .post("/api/intern/jobpost/cl07knsh90002lbtm7i2cphtq")
    //       .send({
    //         description: "testing description for job apply route",
    //       });
    //     expect(res.statusCode).toBe(401);
    //   });
    // });

    test("Loged In & PID Not Provided : should return 401 status code", async () => {
      const res = await request(app).post(`${BASE_URL}/`).send({
        description: "testing description for job apply route",
      });
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.err).toBe("PID Not Provided");
    });
  });
  afterAll(async () => {
    const delApplications = await delApplication(pid, "1");
  });
});
