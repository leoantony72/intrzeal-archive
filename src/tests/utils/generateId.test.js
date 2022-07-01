import { Postid, Userid, Categoryid } from "../../utils/id/generateId.js";

describe("Generating Id", () => {
  test("Userid", async () => {
    const id = Userid();
  });
  test("Postid", async () => {
    const id = Postid();
  });
  test("Categoryid", async () => {
    const id = Categoryid();
  });
});
