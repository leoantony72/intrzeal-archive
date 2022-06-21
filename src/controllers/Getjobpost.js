import { PostService } from "../services/public_route/PostService.js";

const PostServiceInstance = new PostService();

export const getPost = async (req, res) => {
  const category = Array(req.query.category);
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);
  if (limit <= 0) limit = 10;
  if (page < 0) page = 0;

  try {
    if (category[0] == undefined) {
      const getPosts = await PostServiceInstance.getPost({
        page: page,
        limit: limit,
      });
      const data = {
        status: "success",
        current_page: page,
        next_page: `http://localhost:1500/api/posts?page=${page + 1}`,
        prev_page: `http://localhost:1500/api/posts?page=${
          page == 0 ? 0 : page - 1
        }`,
        data: getPosts,
      };

      return res.status(200).json(data);
    } else if (category.length >> 0) {
      const getPosts = await PostServiceInstance.getPostbyCategory({
        category: category,
        page: page,
        limit: limit,
      });
      const data = {
        status: "success",
        current_page: page,
        next_page: `http://localhost:1500/api/posts?page=${page + 1}`,
        prev_page: `http://localhost:1500/api/posts?page=${
          page == 0 ? 0 : page - 1
        }`,
        data: getPosts,
      };

      return res.status(200).json(data);
    }
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ status: "failed", err: err });
  }
};

export const getPostById = async (req, res) => {
  const { pid } = req.params;

  try {
    const getPost = await PostServiceInstance.getPostbyId({ pid: pid });
    if (getPost.length === 0)
      return res.status(400).json({ status: "failed", err: "Post Not Found" });

    return res.status(200).json({ status: "success", data: getPost });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err });
  }
};
