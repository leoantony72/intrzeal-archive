import { createUser, delUser } from "../model/tests/User.js";
import { addcategory, delcategory } from "../model/Admin/Category.js";
import { create_Post, delPost } from "../model/Recruiter/Post.js";

const uid = "12$$";
const pid = "t4j214";
const cid = "testid";
const cid2 = "testid2";
beforeEach(async () => {
  const createUsers = await createUser({
    id: uid,
    name: "Boi",
    email: "Boi@gmail.com",
    role: "INTERN",
  });
  const createCategory = await addcategory({ id: cid, category: "test" });
  const createCategor2y = await addcategory({ id: cid2, category: "frontend" });
  const post = {
    id: pid,
    uid: uid,
    title: "Blockchain dev",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with",
    salary: 1200,
    job_experience: 1,
    date: new Date(),
    category: [cid],
  };
  const createPost = await create_Post(post);
});
afterEach(async () => {
  const delUsers = await delUser({ id: uid });
  const delCategories = await delcategory({ id: cid });
  const delCategories2 = await delcategory({ id: cid2 });
  const delPosts = await delPost(pid, uid);
});
