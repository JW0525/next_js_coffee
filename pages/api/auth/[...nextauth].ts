import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  // 로그인 인증 방식 설정
  providers: [
    CredentialsProvider({
      id: "email-password-credential",
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@email.com" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials: any, req) {
        const { email, password } = credentials;
        const user = { id: "1", email: "matthew@snaps.com", password: "xhfmqldys1!" }

        if (email === user.email && password === user.password) {
          return user;
        }

        return null
      }
    })
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/login'
  }
})