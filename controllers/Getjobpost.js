import { Post } from "../model/Post.js";

export const getPost = async (req, res) => {
  const category = Array(req.query.category);
  try {
    if (category[0] == undefined) {
      const getPost = await Post.get_Post();

      return res.status(200).json({ data: { success: getPost } });
    } else if (category.length >> 0) {
      const getPost = await Post.get_Post_category(category);
      return res.status(200).json({ data: { success: getPost } });
    }
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: err } });
  }
};

export const getPost_by_Id = async (req, res) => {
  const { id } = req.params;
  try {
    const getPost = await Post.getPost_by_ID(id);

    return res.json({ data: { success: getPost } });
  } catch (err) {
    return res.status(400).json({ data: { err: err } });
  }
};
