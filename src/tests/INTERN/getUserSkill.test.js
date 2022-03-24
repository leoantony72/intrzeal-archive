import request from "supertest";
import app from "../../app.js";

describe("GET User Skills", () => {
  describe("api/intern/skills : ", () => {
    describe("Get Skills : Loged In", () => {
      test("/skills : should return 200 status code", async () => {
        const response = await request(app).get("/api/intern/skills");
        expect(response.statusCode).toBe(200);
      });
    });
    // describe("Get Skills : Not Loged In", () => {
    //   test("/jobpost : should return 401 status code", async () => {
    //     const response = await request(app).get("/api/intern/skills");
    //     expect(response.statusCode).toBe(401);
    //   });
    // });
  });
});
