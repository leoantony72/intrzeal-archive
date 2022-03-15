import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const checkif_category_exist = async (req, res, next) => {
  const { category } = req.body;

  let n_category = category.length;
  if (n_category > 5)
    return res.status(400).json({ data: { err: "Only 5 Category allowed" } });
  const check =
    await prisma.$queryRaw`SELECT COUNT("id") FROM "Category" WHERE id IN(${category[0]},${category[1]},${category[2]},${category[3]},${category[4]})`;

  const n_exist = check[0].count;
  if (n_category != n_exist)
    return res.status(404).json({ data: { err: "Category Not Found" } });

  next();
};

//checks length of the array from client
//checks the db for the provided categoryID return Count
//checks if the no.of count === length of array
