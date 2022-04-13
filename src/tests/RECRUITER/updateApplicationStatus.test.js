import request from "supertest";
import app from "../../app.js";
import { createApplication } from "../../model/Intern/Applicant.js";

const uid = "12$$";
const pid = "t4j214";
const description = "testing routes";
const date = new Date();
describe("UPDATE Application Status", () => {
  const BASE_URL = "/api/recruiter/posts";
  describe("Loged In", () => {
    test("/hire?pid= : should return 201 status code", async () => {
      const application = await createApplication(uid, pid, description, date);
      const response = await request(app).put(
        `${BASE_URL}/${pid}/applicants/hire/${uid}`
      );
      expect(response.statusCode).toBe(201);
      expect(res.body.status).toEqual("success");
      expect(res.body.data).toEqual("User Selected For The Job");
    });
  });
});
