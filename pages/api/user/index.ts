import {NextApiRequest, NextApiResponse} from "next";
import {PrismaClient} from "@prisma/client";
import {useSession} from "next-auth/react";


export default async function get_USer(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();  // Loading prisma client

  // 모든 user 들의 레코드를 반환하는 쿼리
  const user = await prisma.user.findMany();

  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: 'lemuel0525@gmail.com',
  //   }
  // })

  res.status(200).json(user);
}