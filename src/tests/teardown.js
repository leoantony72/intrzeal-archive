import { deleteCategory } from "../model/Admin/Category.js";
import { delUser } from "../model/tests/User.js";

export default async () => {
  const create_user1 = await delUser({ id: "xx1" });
  const create_user2 = await delUser({ id: "xx2" });
  const create_user3 = await delUser({ id: "xx3" });
  const create_user4 = await delUser({ id: "xx4" });
  const create_user5 = await delUser({ id: "xx5" });

  const create_category1 = await deleteCategory({ id: "testcategory1" });
  const create_category2 = await deleteCategory({ id: "testcategory2" });
  const create_category3 = await deleteCategory({ id: "testcategory3" });
};
