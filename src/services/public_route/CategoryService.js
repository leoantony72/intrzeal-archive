import { getCategory_by_ID, get_Category } from "../../model/Category.js";

export class CategoryService {
  getCategory = async ({ page, limit }) => {
    const getCategories = await get_Category(page, limit);
    return getCategories;
  };
  getCategorybyId = async ({ cid }) => {
    const getCategory = await getCategory_by_ID(cid);
    return getCategory;
  };
}
