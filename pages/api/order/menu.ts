import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const handleGetRequest = async (prisma: PrismaClient, res: NextApiResponse, userEmail: string) => {
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
}

const handlePostRequest = async (prisma: PrismaClient, res: NextApiResponse, data: any, userEmail: string) => {
  const { menuId, menuName, option, quantity, totalPrice, status, isCoupon } = data;

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

  const userOrderData = await prisma.orderHistory.findMany({
    where: {
      userEmail: userEmail,
    }
  });

  const nonCouponData = userOrderData.filter((e: any) => e.totalPrice > 0);

  const update = await prisma.user.update({
    where: {
      email: userEmail
    },
    data : {
      coupon: {
        decrement: isCoupon ? 1 : 0
      },
      amounts: nonCouponData.length * 1000
    }
  })

  try {
    res.status(201).json({ method: 'POST', status: true })
  } catch (err) {
    res.status(400).json({ status: false })
  }
}

export default async function post_Menu(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const prisma = new PrismaClient();  // Loading prisma client
  const { method } = req;
  const data = req.body;
  const { userEmail } = data;

  switch(method) {
    case 'GET':
      handleGetRequest(prisma, res, userEmail);
      break;
    case 'POST':
      handlePostRequest(prisma, res, data, userEmail);
      break;
    default:
      res.status(400).json({ status: false })
      break;
  }
}