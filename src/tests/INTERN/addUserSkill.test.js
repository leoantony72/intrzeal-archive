import request from "supertest";
import app from "../../app.js";
import { delUser_skills } from "../../model/Intern/User_meta_category.js";

describe("ADD User Skills", () => {
  const BASE_URL = "/api/intern/users/skills";
  describe("api/intern/skills : ", () => {
    test("Loged In & PID Provided : should return 201 status code", async () => {
      const res = await request(app)
        .post(`${BASE_URL}`)
        .send({
          category: ["testid", "testid2"],
        });
      expect(res.statusCode).toBe(201);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toBe("Category/skill added");
    });
    // describe("Not Loged In & PID Provided", () => {
    //   test("/skills : should return 401 status code", async () => {
    //     const res = await request(app)
    //       .post("/api/intern/skills")
    //       .send({
    //         category: ["cl0vt9m000007vstmbxal1530"],
    //       });
    //     expect(res.statusCode).toBe(401);
    //   });
    // });
    describe("Loged In & PID Not Provided", () => {
      test("/skills : should return 400 status code", async () => {
        const res = await request(app).post("/api/intern/skills").send({});
        expect(res.statusCode).toBe(400);
        expect(res.body.status).toEqual("failed");
        expect(res.body.err).toBe("PID Not Provided");
      });
    });

    // describe("Not Loged In", () => {
    //   test("/jobpost : should return 401 status code", async () => {
    //     const res = await request(app)
    //       .post("/api/intern/jobpost")
    //       .send({
    //         category: ["cl0vt9m000007vstmbxal1530"],
    //       });
    //     expect(res.statusCode).toBe(401);
    //   });
    // });
    afterAll(async () => {
      const delSkills = await delUser_skills(["testid"]);
      const delSkills2 = await delUser_skills(["testid2"]);
    });
  });
});
