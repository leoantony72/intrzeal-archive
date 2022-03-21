import { prisma } from "../../../client.js";

export const checkif_postexist = async (pid) => {
  return await prisma.Post.count({
    where: {
      id: pid,
    },
  });
};
