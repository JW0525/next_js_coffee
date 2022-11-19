import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";

export default async function post_Menu(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();  // Loading prisma client
  const { method } = req;
  const data = req.body;
  const { menuId, menuName, option, quantity, totalPrice, status, userEmail } = data;

  const userOrderData = await prisma.orderHistory.findMany({
    where: {
      userEmail: userEmail
    }
  });

  switch(method) {
    case 'POST':
      const result = await prisma.orderHistory.create({
        data: {
          menuId,
          menuName,
          option,
          quantity,
          totalPrice,
          status,
          userEmail: userEmail
        }
      });

      const update = await prisma.user.update({
        where: {
          email: userEmail
        },
        data : {
          amounts: userOrderData.length * 1000
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