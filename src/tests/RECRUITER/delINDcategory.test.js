import request from "supertest";
import app from "../../app.js";

const cid = "testid";
const pid = "t4j214";
describe("DEL Individual Category", () => {
  const BASE_URL = "/api/recruiter/posts";
  describe("api/recruiter/post/category/:pid : ", () => {
    describe("Loged In", () => {
      test("Category & PID Provided : should return 200 status code", async () => {
        const response = await request(app)
          .delete(`${BASE_URL}/${pid}/category`)
          .send({
            category: [cid],
          });
        expect(response.statusCode).toBe(200);
        expect(res.body.status).toEqual("success");
        expect(res.body.data).toBe("Category deleted");
      });

      test("Category & PID Not Provided : should return 400 status code", async () => {
        const response = await request(app)
          .delete(`${BASE_URL}//category`)
          .send({
            category: [cid],
          });
        expect(response.statusCode).toBe(400);
        expect(res.body.status).toEqual("failed");
        expect(res.body.err).toBe("PID Not Provided");
      });
      test("Category Not Provided & PID Provided : should return 400 status code", async () => {
        const response = await request(app)
          .delete(`${BASE_URL}/${pid}/category`)
          .send({});
        expect(response.statusCode).toBe(400);
        expect(res.body.status).toEqual("failed");
        expect(res.body.err).toBe("Category Not Provided");
      });
    });
  });
});
