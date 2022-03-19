import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient({
  log: ["query"],
});

export class Post {
  //del post
  static get_Post = async () => {
    return await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.salary,p.createdat,c.category,p.status
    FROM "Post" p 
    JOIN "Post_category" pc ON p.id = pc.postid
    JOIN "Category" c ON pc.category_id = c.id 
    WHERE p.status = 'OPEN'`;
  };
  static get_Post_category = async (category) => {
    return await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.salary,p.createdat,c.category,p.status
    FROM "Post" p 
    JOIN "Post_category" pc ON p.id = pc.postid
    JOIN "Category" c ON pc.category_id = c.id 
    WHERE p.status = 'OPEN' AND pc.category_id IN(${category[0]},${category[1]},${category[2]},${category[3]},${category[4]})`;
  };
  static getPost_by_ID = async (pid) => {
    return await prisma.$queryRaw`SELECT p.id,p.userid,p.title,p.descriptions,p.salary,p.createdat,c.category FROM "Post" p JOIN "Post_category" pc ON p.id = pc.postid JOIN "Category" c ON pc.category_id = c.id WHERE p.id=${pid}`;
  };
}
