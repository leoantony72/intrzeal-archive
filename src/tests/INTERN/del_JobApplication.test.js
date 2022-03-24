import request from "supertest";
import app from "../../app.js";

describe("DEL Job Application", () => {
  describe("api/intern/jobpost : ", () => {
    describe("Loged In & PID Provided", () => {
      test("/jobpost/:pid : should return 200 status code", async () => {
        const response = await request(app).del(
          "/api/intern/jobpost/cl07knsh90002lbtm7i2cphtq"
        );
        expect(response.statusCode).toBe(200);
      });
    });
    // describe("Not Loged In & PID Provided", () => {
    //   test("/jobpost/:pid : should return 401 status code", async () => {
    //     const response = await request(app).del(
    //       "/api/intern/jobpost/cl07knsh90002lbtm7i2cphtq"
    //     );
    //     expect(response.statusCode).toBe(401);
    //   });
    // });
    describe("Loged In & PID Not Provided", () => {
      test("/jobpost/:pid : should return 401 status code", async () => {
        const response = await request(app).del("/api/intern/jobpost/");
        expect(response.statusCode).toBe(400);
      });
    });
  });
});
