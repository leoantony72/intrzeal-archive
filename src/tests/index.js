import { addcategory } from "../model/Admin/Category.js";
import { createUser } from "../model/tests/User.js";
// import { CategoryService } from "../services/Admin/CategoryService.js";

// const categoryInstance = new CategoryService();

const user1 = {
  id: "1err",
  name: "zoro",
  email: "zoro1@gmail.com",
  role: "INTERN",
};
const user2 = {
  id: "3err",
  name: "zoro",
  email: "zoro2@gmail.com",
  role: "INTERN",
};

const category1 = {
  id: "testcategory1",
  category: "jest",
};
const category2 = {
  id: "testcategory2",
  category: "mocha",
};

export default async () => {
  const create_user1 = await createUser(user1);
  const create_user2 = await createUser(user2);

  const create_category1 = await addcategory(category1);
  const create_category2 = await addcategory(category2);
};
