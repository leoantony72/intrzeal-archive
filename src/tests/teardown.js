import { deleteCategory } from "../model/Admin/Category.js";
import { delUser } from "../model/tests/User.js";

export default async () => {
  const create_user1 = await delUser({ id: "1err" });
  const create_user2 = await delUser({ id: "3err" });

  const create_category1 = await deleteCategory({ id: "testcategory1" });
  const create_category2 = await deleteCategory({ id: "testcategory2" });
};
