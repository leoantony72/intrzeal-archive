import { getPost_by_ID, get_Post, get_Post_category } from "../model/Post.js";

export const getPost = async (req, res) => {
  const category = Array(req.query.category);
  try {
    if (category[0] == undefined) {
      const getPosts = await get_Post();

      return res.status(200).json({ success: getPosts });
    } else if (category.length >> 0) {
      const getPosts = await get_Post_category(category);
      return res.status(200).json({ success: getPosts });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ err: err });
  }
};

export const getPost_by_Id = async (req, res) => {
  const { pid } = req.params;
  try {
    const getPost = await getPost_by_ID(pid);
    if (getPost.length === 0)
      return res.status(400).json({ err: "Post Not Found" });

    return res.status(200).json({ success: getPost });
  } catch (err) {
    return res.status(400).json({ err: err });
  }
};
