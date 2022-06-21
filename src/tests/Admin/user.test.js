import { UserService } from "../../services/Admin/UserService";

const userInstance = new UserService();

describe("Admin : User", () => {
  const uid = "1err";
  test("get Users", async () => {
    const page = 1;
    const limit = 4;
    const users = await userInstance.getUsers({ page, limit });
    expect(users[0].id);
    expect(users[0].name);
  });

  test("get Users by Role", async () => {
    const page = 1;
    const limit = 4;
    const role = "INTERN";
    const users = await userInstance.getUsersbyRole({ role, page, limit });
    expect(users[0].id);
    expect(users[0].name);
  });

  test("get User by ID", async () => {
    const users = await userInstance.getUserbyId({ uid: uid });
    expect(users[0].id);
    expect(users[0].name);
  });

  test("Ban a User", async () => {
    const users = await userInstance.banUser({ uid: uid });
    expect(users.id);
  });
  test("UnBan a User", async () => {
    const users = await userInstance.unbanUser({ uid: uid });
    expect(users.id);
  });
});
