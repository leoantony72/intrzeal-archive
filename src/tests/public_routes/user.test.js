import { UserService } from "../../services/public_route/UserService.js";

const UserServiceInstance = new UserService();
describe("Public Route : User Serivce", () => {
  test("Get user Role", async () => {
    const role = await UserServiceInstance.getRole({ uid: "xx1" });
    expect(role[0].role);
  });
  test("Get User Profile : INTERN", async () => {
    const profile = await UserServiceInstance.getUserProfile({ uid: "xx1" });

    expect(profile.profile[0].id);
    expect(profile.profile[0].name);
    expect(profile.profile[0].resume);
  });
  test("Get User Profile : RECRUITER", async () => {
    const profile = await UserServiceInstance.getUserProfile({ uid: "xx4" });
    expect(profile.profile[0].id);
    expect(profile.profile[0].name);
    expect(profile.profile[0].companey);
    expect(profile.profile[0].country);
  });
  test("Get User Profile : Profile Not Found", async () => {
    const profile = await UserServiceInstance.getUserProfile({ uid: "xx5" });
    console.log(profile);
    expect(profile.err == "Profile Not Found");
  });
});
