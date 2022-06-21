import {
  addUserskill,
  isCategoryAdded,
  deleteUserSkills,
  getUserSkills,
} from "../../model/Intern/User_meta_category.js";

export class UserCategoryService {
  isSkillAdded = async ({ uid, category }) => {
    const check = await isCategoryAdded(uid, category);
    return check;
  };

  getSkills = async ({ uid }) => {
    const userSkills = await getUserSkills(uid);
    return userSkills;
  };

  addSkills = async ({ uid, category }) => {
    const skillAdded = await this.isSkillAdded({
      uid: uid,
      category: category,
    });
    const skillExist = skillAdded[0].count;
    if (skillExist != 0) return { added: true };
    const userSkill = await addUserskill(uid, category);
    return { userSkill, added: false };
  };

  deleteSkills = async ({ uid, category }) => {
    const skillAdded = await this.isSkillAdded({
      uid: uid,
      category: category,
    });
    const skillExist = skillAdded[0].count;
    if (skillExist == 0) return { added: false };

    const userSkills = await deleteUserSkills(uid, category);
    return { added: true };
  };
}
