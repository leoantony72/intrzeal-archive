import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const getUser_skill = async (req, res) => {
  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    // const getuser_skill = await prisma.User_meta_category.findMany({
    //   where: {
    //     userId: uid,
    //   },
    //   select: {
    //     categoryId: true,
    //   },
    // });
    const getuser_skill =
      await prisma.$queryRaw`SELECT uc."categoryId",c."category" FROM "User_meta_category" AS uc JOIN "Category" c ON uc."categoryId" = c."id" WHERE uc."userId"=${uid}`;

    return res.status(201).json({ data: { success: getuser_skill } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: "Something Went Wrong" } });
  }
};

export const addUser_skill = async (req, res) => {
  const { category } = req.body;

  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const check =
      await prisma.$queryRaw`SELECT COUNT("userId") FROM "User_meta_category" WHERE "userId"=${uid} AND "categoryId"=${category[0]}`;

    const n_exist = check[0].count;
    if (n_exist != 0)
      return res
        .status(400)
        .json({ data: { err: "Category/skill Alredy Added" } });

    const adduser_skill = await prisma.User_meta_category.create({
      data: {
        userId: uid,
        categoryId: category[0],
      },
    });
    return res.status(201).json({ data: { success: "Category/skill added" } });
  } catch (err) {
    console.log("TEST");
    console.log(err.message);
    return res.status(400).json({ data: { err: "Something Went Wrong" } });
  }
};

export const delUser_skill = async (req, res) => {
  const { category } = req.body;

  //get userid from session
  const uid = "ckzrv2bh200004ftmeapovpbl";
  try {
    const check =
      await prisma.$queryRaw`SELECT COUNT("userId") FROM "User_meta_category" WHERE "userId"=${uid} AND "categoryId"=${category[0]}`;

    const n_exist = check[0].count;
    if (n_exist == 0)
      return res
        .status(400)
        .json({ data: { err: "Category/skill Not Added" } });

    const deluser_skill = await prisma.User_meta_category.deleteMany({
      where: {
        userId: uid,
        categoryId: category[0],
      },
    });
    return res
      .status(201)
      .json({ data: { success: "Category/skill deleted" } });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json({ data: { err: "Something Went Wrong" } });
  }
};
