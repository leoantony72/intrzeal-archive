import request from "supertest";
import app from "../../app.js";

describe("Apply to Job Post", () => {
  describe("api/intern/jobpost : ", () => {
    describe("Loged In & PID Provided", () => {
      test("/jobpost/:pid : should return 200 status code", async () => {
        const response = await request(app)
          .post("/api/intern/jobpost/cl07lxp31002656tmn1a50c33")
          .send({
            description: "testing description for job apply route",
          });
        expect(response.statusCode).toBe(201);
      });
    });
    // describe("Not Loged In & PID Provided", () => {
    //   test("/jobpost/:pid : should return 401 status code", async () => {
    //     const response = await request(app)
    //       .post("/api/intern/jobpost/cl07knsh90002lbtm7i2cphtq")
    //       .send({
    //         description: "testing description for job apply route",
    //       });
    //     expect(response.statusCode).toBe(401);
    //   });
    // });
    describe("Loged In & PID Not Provided", () => {
      test("/jobpost/:pid : should return 401 status code", async () => {
        const response = await request(app).post("/api/intern/jobpost").send({
          description: "testing description for job apply route",
        });
        expect(response.statusCode).toBe(400);
      });
    });
  });
});
