import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

export default async function get_USer(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();  // Loading prisma client

  const { method } = req;
  switch(method) {
    case 'POST':
      const user = await prisma.user.findUnique({
        where: {
          email: 'lemuel0525@gmail.com',
        }
      })

      try {
        res.status(201).json({ method: 'POST', status: true })
      } catch (err) {
        res.status(400).json({ status: false })
      }
      break;
    default:
      res.status(400).json({ status: false })
      break;
  }
}