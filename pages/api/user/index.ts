import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { CategoryList } from "../../database/model";

export default async function get_User(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();  // Loading prisma client

  const { method } = req;
  switch(method) {
    case 'GET':
      try {
        // 모든 user 들의 레코드를 반환하는 쿼리
        const user = await prisma.user.findMany();
        res.status(200).json(user);
      } catch (err) {
        res.status(400).json({ status: false })
      }
      break;
    default:
      res.status(400).json({ status: false })
      break;
  }
}