import { CategoryService } from "../../services/Admin/CategoryService.js";

const CategoryInstance = new CategoryService();
const category1 = "architecture";
describe("admin : Category", () => {
  test("Add & Delete Category", async () => {
    const add_category = await CategoryInstance.addCategory({
      category: category1,
    });
    expect(add_category.id);

    const id = add_category.id;
    const category = await CategoryInstance.deleteCategory({ id: id });
  });
});
