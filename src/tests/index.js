import { addCategory } from "../model/Admin/Category.js";
import { createPost } from "../model/Recruiter/Post.js";
import { createUser } from "../model/tests/User.js";

const user1 = {
  id: "xx1",
  name: "zoro",
  email: "zoro1@gmail.com",
  role: "INTERN",
};
const user2 = {
  id: "xx2",
  name: "zoro",
  email: "zoro2@gmail.com",
  role: "INTERN",
};
const user3 = {
  id: "xx3",
  name: "zoro",
  email: "zoro3@gmail.com",
  role: "INTERN",
};
const user4 = {
  id: "xx4",
  name: "zoro",
  email: "zoro4@gmail.com",
  role: "RECRUITER",
};
const user5 = {
  id: "xx5",
  name: "zoro",
  email: "zoro5@gmail.com",
  role: "ADMIN",
};

const category1 = {
  id: "testcategory1",
  category: "jest",
};
const category2 = {
  id: "testcategory2",
  category: "mocha",
};
const category3 = {
  id: "testcategory3",
  category: "GOLANG",
};

const post1 = {
  id: "456post",
  uid: "xx1",
  title: "title",
  description: "description",
  salary: 3234,
  date: new Date(),
  job_experience: 3,
  category: ["testcategory2", "testcategory1"],
};
const post2 = {
  id: "89post",
  uid: "xx1",
  title: "title",
  description: "description",
  salary: 3234,
  date: new Date(),
  job_experience: 3,
  category: ["testcategory2"],
};

export default async () => {
  const create_user1 = await createUser(user1);
  const create_user2 = await createUser(user2);
  const create_user3 = await createUser(user3);
  const create_user4 = await createUser(user4);
  const create_user5 = await createUser(user5);

  const create_category1 = await addCategory(category1);
  const create_category2 = await addCategory(category2);
  const create_category3 = await addCategory(category3);

  const create_post1 = await createPost(post1);
  const create_post2 = await createPost(post2);
};
