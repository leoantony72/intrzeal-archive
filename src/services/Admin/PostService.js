import { deletePost as delPost } from "../../model/Admin/Post.js";

export class PostService {
  deletePost = async ({ pid }) => {
    const post = await delPost(pid);
    return post;
  };
}
