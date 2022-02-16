import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export const applyPost = async (req, res)=>{
    const date = new Date();
    const { id } = req.params;

    try {
      const getPost = await prisma.Post.findMany({
        where: {
          id: id,
        },
      });
      
      
    

      return res.json({ data: getPost });

      

    } catch (err) {
      return res.status(409).json(err);
    }
} 