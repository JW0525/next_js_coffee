import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";
import { hashPassword } from 'pages/lib/auth';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Loading prisma client
  let prisma = new PrismaClient();

  if (req.method !== 'POST') return;

  const data = req.body;
  const { name, email, password } = data;

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
      name: name,
      email: email,
      password: hashedPassword,
    },
  });


  if (result) {
    res.status(201).json({ message: 'Created user!', error: false });
  } else {
    res.status(422).json({ message: 'Prisma error!', error: true })
  }
}

export default handler;