import { PostService } from "../../services/Recruiter/PostService.js";
const PostServiceInstance = new PostService();

export const updatePost = async (req, res) => {
  const { pid } = req.params;
  const { title, description, salary, job_experience, status } = req.body;
  const uid = res.locals.uid;
  if (status != "OPEN")
    if (status != "CLOSED")
      return res
        .status(400)
        .json({ status: "failed", err: "Provide Status Open or Closed" });
  try {
    const updateJob = await PostServiceInstance.updatePosts({
      pid: pid,
      uid: uid,
      title: title,
      description: description,
      salary: salary,
      job_experience: job_experience,
      status: status,
    });

    if (!updateJob.owner === true)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });
    if (!updateJob.posts[0].id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something Went Wrong" });

    return res
      .status(201)
      .json({ status: "success", data: "Job Post Updated" });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};

//Add Individual Category
export const updatePostAddCategory = async (req, res) => {
  const { pid } = req.params;
  const { category } = req.body;
  const uid = res.locals.uid;
  try {

    const addcategory = await PostServiceInstance.addCategories({
      pid: pid,
      uid: uid,
      category: category
    });
    if (!addcategory.owner === true)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });
    if (!addcategory.added === false)
      return res
        .status(400)
        .json({ status: "failed", err: "Category Already Added" });
    if (!addcategory.category[0].post_id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something Went Wrong" });

    return res.status(201).json({ status: "success", data: "Category Added" });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
//Delete Individual Category
export const updatePostDeleteCategory = async (req, res) => {
  const { pid } = req.params;
  const { category } = req.body;

  const uid = res.locals.uid;
  try {
    const delCategories = await PostServiceInstance.deleteCategory({
      pid: pid,
      uid: uid,
      category: category
    });

    if (!delCategories.owner === true)
      return res
        .status(401)
        .json({ status: "failed", err: "Unauthorized action" });
    if (!delCategories.added === true)
      return res
        .status(400)
        .json({ status: "failed", err: "Category Not Added" });
    if (!delCategories.delcategory[0].post_id)
      return res
        .status(400)
        .json({ status: "failed", err: "Something Went Wrong" });

    return res
      .status(200)
      .json({ status: "success", data: "Category deleted" });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err.message });
  }
};
