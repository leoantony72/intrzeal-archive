import { prisma } from "../../../client.js";

export const createUser = async ({ id, name, email, role }) => {
  return await prisma.Users.create({
    data: {
      id: id,
      name: name,
      email: email,
      role: role,
    },
    select: {
      id: true,
      status: true,
    },
  });
};
export const delUser = async ({ id }) => {
  return await prisma.Users.delete({
    where: {
      id: id,
    },
    select: {
      id: true,
      status: true,
    },
  });
};
