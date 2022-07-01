import { getPostByID, getPost, getPostByCategory } from "../../model/public_routes/Post.js";

export class PostService {
  getPost = async ({ page, limit }) => {
    const getPosts = await getPost(page, limit);
    return getPosts;
  };
  getPostbyCategory = async ({ category, page, limit }) => {
    const getPosts = await getPostByCategory(category, page, limit);
    return getPosts;
  };
  getPostbyId = async ({ pid }) => {
    const getPost = await getPostByID(pid);
    return getPost;
  };
}
