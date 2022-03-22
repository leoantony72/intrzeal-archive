import request from "supertest";
import app from "../../app.js";

describe("DEL Individual Category", () => {
  describe("api/recruiter/post/category/:pid : ", () => {
    describe("Loged In", () => {
      test("/post/category/:pid : should return 200 status code", async () => {
        const response = await request(app)
          .delete("api/recruiter/post/category/cl0yhknim0002mrtm5vu4ckcr")
          .send({
            category: [
              "cl0vsgz1d0000l9tm683een19",
              "cl0vt2f670004c1tmbl2wbdnc",
            ],
          });
        expect(response.statusCode).toBe(200);
      });
    });
  });
});