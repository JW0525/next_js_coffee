import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

export default async function get_OrderHistory(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const prisma = new PrismaClient();  // Loading prisma client

  const { method } = req;
  switch(method) {
    case 'GET':
      try {
        const data = await prisma.orderHistory.findMany();
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({ status: false })
      }
      break;
    default:
      res.status(400).json({ status: false })
      break;
  }
}