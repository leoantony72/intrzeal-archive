import {
  getCategoryByID,
  getCategories
} from "../../model/public_routes/Category.js";

export class CategoryService {
  getCategory = async ({ page, limit }) => {
    const categories = await getCategories(page, limit);
    return categories;
  };
  getCategorybyId = async ({ cid }) => {
    const getCategory = await getCategoryByID(cid);
    return getCategory;
  };
}
