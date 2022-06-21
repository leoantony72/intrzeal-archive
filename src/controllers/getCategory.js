import { CategoryService } from "../services/public_route/CategoryService.js";

const CategoryServiceInstance = new CategoryService();

export const getCategory = async (req, res) => {
  var page = parseInt(req.query.page);
  var limit = parseInt(req.query.limit);

  if (!limit) limit = 10;
  if (!page) page = 0;
  if (limit <= 0) limit = 10;
  if (page < 0) page = 0;
  try {
    const getCategories = await CategoryServiceInstance.getCategory({
      page: page,
      limit: limit,
    });
    const data = {
      status: "success",
      current_page: page,
      next_page: `http://localhost:1500/api/category?page=${page + 1}`,
      prev_page: `http://localhost:1500/api/category?page=${
        page == 0 ? 0 : page - 1
      }`,
      data: getCategories,
    };

    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const getCategory = await CategoryServiceInstance.getCategorybyId({
      cid: id,
    });
    if (getCategory.length === 0)
      return res
        .status(400)
        .json({ status: "failed", err: "Category Not Found" });

    return res.status(200).json({ status: "success", data: getCategory });
  } catch (err) {
    return res.status(400).json({ status: "failed", err: err });
  }
};
