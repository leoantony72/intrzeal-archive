import request from "supertest";
import app from "../../app.js";
import { getCategory_by_ID } from "../../model/Category.js";
import { addUserskill } from "../../model/Intern/User_meta_category.js";

const cid = "testid2";
describe("DEL User Skills", () => {
  const BASE_URL = "/api/intern/users/skills";
  describe("api/intern/skills : ", () => {
    test("Loged In & PID Provided : should return 200 status code", async () => {
      let get = await getCategory_by_ID(cid);
      console.log(get);
      const addskills = await addUserskill("1", [cid]);
      console.log(addskills);
      const res = await request(app)
        .delete(`${BASE_URL}`)
        .send({
          category: [cid],
        });
      console.log(res.body);
      expect(res.statusCode).toBe(201);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toEqual("Category/skill deleted");
    });
    // describe("Not Loged In & PID Provided", () => {
    //   test("/skills : should return 401 status code", async () => {
    //     const res = await request(app).delete("/api/intern/skills").send({
    //       category: "cl0vsa4ik00008dtmiitkkt9x",
    //     });
    //     expect(res.statusCode).toBe(401);
    //   });
    // });

    test("Loged In & PID Not Provided : should return 400 status code", async () => {
      const res = await request(app).delete(`${BASE_URL}`).send({});
      expect(res.statusCode).toBe(400);
      expect(res.body.status).toEqual("failed");
      expect(res.body.data).toEqual("Category/skill Not Provided");
    });

    // describe("Not Loged In", () => {
    //   test("/jobpost : should return 401 status code", async () => {
    //     const res = await request(app).delete("/api/intern/skills");
    //     expect(res.statusCode).toBe(401);
    //   });
    // });
  });
});
