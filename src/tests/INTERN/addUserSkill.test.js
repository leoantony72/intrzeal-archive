import request from "supertest";
import app from "../../app.js";

describe("ADD User Skills", () => {
  describe("api/intern/skills : ", () => {
    describe("Loged In & PID Provided", () => {
      test("/skills : should return 200 status code", async () => {
        const response = await request(app)
          .post("/api/intern/skills")
          .send({
            category: ["cl0vt9m000007vstmbxal1530"],
          });
        expect(response.statusCode).toBe(200);
      });
    });
    // describe("Not Loged In & PID Provided", () => {
    //   test("/skills : should return 401 status code", async () => {
    //     const response = await request(app)
    //       .post("/api/intern/skills")
    //       .send({
    //         category: ["cl0vt9m000007vstmbxal1530"],
    //       });
    //     expect(response.statusCode).toBe(401);
    //   });
    // });
    describe("Loged In & PID Not Provided", () => {
      test("/skills : should return 400 status code", async () => {
        const response = await request(app).post("/api/intern/skills").send({});
        expect(response.statusCode).toBe(400);
      });
    });

    // describe("Not Loged In", () => {
    //   test("/jobpost : should return 401 status code", async () => {
    //     const response = await request(app)
    //       .post("/api/intern/jobpost")
    //       .send({
    //         category: ["cl0vt9m000007vstmbxal1530"],
    //       });
    //     expect(response.statusCode).toBe(401);
    //   });
    // });
  });
});
