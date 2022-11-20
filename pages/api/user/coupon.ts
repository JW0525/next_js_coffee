import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function post_Menu(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();  // Loading prisma client
  const { method } = req;
  const data = req.body;
  const { email } = data;

  switch(method) {
    case 'POST':
      const update = await prisma.user.update({
        where: {
          email
        },
        data : {
          coupon: {
            increment: 1
          },
          couponExchanged: {
            increment: 1
          }
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