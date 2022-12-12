import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";
import { hashPassword } from 'pages/api/lib/auth';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();  // Loading prisma client

  if (req.method !== 'POST') return;

  const data = req.body;
  const { name, email, password, birthDate, coupon, amounts, couponExchanged } = data;

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
    select: { email: true, name: true }
  });

  if (existingUser) {
    res.status(422).json({ message: 'User Email already exists!', error: true });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      birthDate,
      coupon,
      amounts,
      couponExchanged
    },
  });

  if (result) {
    res.status(201).json({ message: 'Created user!', error: false });
  } else {
    res.status(422).json({ message: 'Prisma error!', error: true })
  }
}

export default handler;