import { prisma } from "../../../client.js";

export const checkif_Userexist = async (uid) => {
  return await prisma.User.count({
    where: {
      id: uid,
    },
  });
};
