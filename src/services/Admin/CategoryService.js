import { addcategory,delcategory } from "../../model/Admin/Category.js";
import { Categoryid } from "../../utils/id/generateId.js";

export class CategoryService {
  addCategory = async ({ category }) => {
    const cid = await Categoryid();
    const createcategory = await addcategory({ id: cid, category: category });
    return createcategory;
  };
  deleteCategory = async ({ id }) => {
    const category = await delcategory({ id: id });
    return category
  };
}
