import { PostService } from "../../services/Admin/PostService.js";
import { PostService as Postservice2 } from "../../services/Recruiter/PostService.js";

const postInstance = new PostService();

const postInstanceRecruiter = new Postservice2();

const post = {
  uid: "xx1",
  title: "test",
  description: "testing delete function",
  salary: 10000,
  job_experience: 2,
  category: ["testcategory1", "testcategory2"],
};

describe("Admin : Post", () => {
  test("del post", async () => {
    const create_post = await postInstanceRecruiter.createPost(post);
    const pid = create_post.createPost.id;
    const delete_post = await postInstance.deletePost({ pid: pid });
    expect(delete_post.id);
  });
});
