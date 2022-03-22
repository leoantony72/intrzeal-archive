import request from "supertest";
import app from "../../app.js";

describe("DEL User Skills", () => {
  describe("api/intern/skills : ", () => {
    describe("Loged In & PID Provided", () => {
      test("/skills : should return 200 status code", async () => {
        const response = await request(app).delete("/api/intern/skills").send({
          "category": "cl0vsa4ik00008dtmiitkkt9x",
        });
        expect(response.statusCode).toBe(200);
      });
    });
    // describe("Not Loged In & PID Provided", () => {
    //   test("/skills : should return 401 status code", async () => {
    //     const response = await request(app).delete("/api/intern/skills").send({
    //       category: "cl0vsa4ik00008dtmiitkkt9x",
    //     });
    //     expect(response.statusCode).toBe(401);
    //   });
    // });
    describe("Loged In & PID Not Provided", () => {
      test("/skills : should return 400 status code", async () => {
        const response = await request(app).delete("/api/intern/skills".send({}));
        expect(response.statusCode).toBe(400);
      });
    });

    // describe("Not Loged In", () => {
    //   test("/jobpost : should return 401 status code", async () => {
    //     const response = await request(app).delete("/api/intern/skills");
    //     expect(response.statusCode).toBe(401);
    //   });
    // });
  });
});
