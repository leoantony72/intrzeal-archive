import { addCategory } from "../model/Admin/Category.js";
import { createPost } from "../model/Recruiter/Post.js";
import { createUser } from "../model/tests/User.js";

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

const post = {
  id: "456post",
  uid: "1err",
  title: "title",
  description: "description",
  salary: 3234,
  date: new Date(),
  job_experience: 3,
  category: ["testcategory2", "testcategory1"],
};

export default async () => {
  const create_user1 = await createUser(user1);
  const create_user2 = await createUser(user2);

  const create_category1 = await addCategory(category1);
  const create_category2 = await addCategory(category2);

  const create_post = await createPost(post);
  console.log(create_post)
};
