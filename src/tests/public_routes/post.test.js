import { PostService } from "../../services/public_route/PostService.js";

const PostServiceInstance = new PostService();
describe("Public Route : Post", () => {
  test("Get Post", async () => {
    const page = 0;
    const limit = 5;
    const posts = await PostServiceInstance.getPost({
      page: page,
      limit: limit,
    });

    expect(posts[0].id);
  });
  test("Get Post By Category", async () => {
    const page = 0;
    const limit = 5;
    const cid = "testcategory2";
    const posts = await PostServiceInstance.getPostbyCategory({
      category:[cid],
      page:page,
      limit:limit,
    });
    expect(posts[0].id);
  });
  test("Get Post By ID", async () => {
    const pid = "89post";
    const post = await PostServiceInstance.getPostbyId({ pid: pid });
    expect(post[0].id);
  });
});
