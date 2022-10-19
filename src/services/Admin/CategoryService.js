import { addCategory as insertCategory,deleteCategory as delCategory } from "../../model/Admin/Category.js";
import { Categoryid } from "../../utils/id/generateId.js";

export class CategoryService {

  addCategory = async ({ category }) => {
    const cid = await Categoryid();
    const createcategory = await insertCategory({ id: cid, category: category });
    return createcategory;
  };

  deleteCategory = async ({ id }) => {
    const category = await delCategory({ id: id });
    return category
  };

}
