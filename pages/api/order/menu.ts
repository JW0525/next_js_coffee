import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import {CategoryList} from "../../database/model";

export default async function post_Menu(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();  // Loading prisma client
  const { method } = req;
  const data = req.body;
  const { menuId, menuName, option, quantity, totalPrice, status, userEmail } = data;

  switch(method) {
    case 'GET':
      try {
        const userOrderData = await prisma.orderHistory.findMany({
          where: {
            userEmail: userEmail,
          }
        });
        res.status(200).json(userOrderData);
      } catch (err) {
        res.status(400).json({ status: false })
      }
      break;
    case 'POST':
      const userOrderData = await prisma.orderHistory.findMany({
        where: {
          userEmail: userEmail,
        }
      });

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
      const nonCouponData = userOrderData.filter((e) => e.totalPrice > 0);

      const update = await prisma.user.update({
        where: {
          email: userEmail
        },
        data : {
          coupon: {
            decrement: 1
          },
          amounts: nonCouponData.length * 1000
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