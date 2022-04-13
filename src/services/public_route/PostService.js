import { getPost_by_ID, get_Post, get_Post_category } from "../../model/Post.js";

export class PostService {
  getPost = async ({ page, limit }) => {
    const getPosts = await get_Post(page, limit);
    return getPosts;
  };
  getPostbyCategory = async ({ category, page, limit }) => {
    const getPosts = await get_Post_category(category, page, limit);
    return getPosts;
  };
  getPostbyId = async ({ pid }) => {
    const getPost = await getPost_by_ID(pid);
    return getPost;
  };
}
