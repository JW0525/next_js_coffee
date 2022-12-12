import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../lib/auth";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "email-password-credential",
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@email.com" },
        password: { label: "Password", type: "password" }
      },
      // @ts-ignore
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials!.email,
          },
          select: {
            name: true, email: true, password: true
          },
        });
        if (!user) throw new Error('Wrong User');

        const isValid = await verifyPassword(credentials!.password, user.password);
        if (!isValid) throw new Error('Could not log you in!');

        return { name: user.name, email: user.email };
      }
    })
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/login',
    error: '/auth/error'
  }
})