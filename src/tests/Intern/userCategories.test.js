import { UserCategoryService } from "../../services/Intern/UserCategoryService";

const usercategoryInstance = new UserCategoryService();

describe("Intern : user Category", () => {
  const uid = "1err";
  const category = ["testcategory1"];

  test("add skills", async () => {
    const add_skills = await usercategoryInstance.addSkills({
      uid: uid,
      category: category,
    });
    expect(add_skills.added == false);
    expect(add_skills.adduser_skill.user_id);
  });

  test("getSkills", async () => {
    const skills = await usercategoryInstance.getSkills({ uid: uid });
    expect(skills.category_id);
    expect(skills.category);
  });

  test("check if skill is already added", async () => {
    const skills = await usercategoryInstance.checkifSkillAdded({
      uid: uid,
      category: category,
    });
    expect(skills.count);
  });

  test("delete skills", async () => {
    const delete_skill = await usercategoryInstance.delSkills({
      uid: uid,
      category: category,
    });
    expect(delete_skill.added == true);
  });
});
