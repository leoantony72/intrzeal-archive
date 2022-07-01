import { CategoryService } from "../../services/public_route/CategoryService";

const categoryServiceInstance = new CategoryService();
describe("Public Route : Category", () => {
  test("Get Category", async () => {
    const page = 0;
    const limit = 5;
    const categories = await categoryServiceInstance.getCategory({
      page,
      limit,
    });
    expect(categories[0].id);
  });

  test("Get Category BY ID", async () => {
    const cid = "testcategory2";
    const category = await categoryServiceInstance.getCategorybyId({
      cid: cid,
    });
    expect(category[0].id == "testcategory2")
  });
});
