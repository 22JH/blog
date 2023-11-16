import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import { connectToDB } from "@/app/lib/mongoose";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/lib/models/user.model";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        id: { label: "id", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        try {
          connectToDB();
          const user = await User.findOne({ id: credentials!.id });
          if (!user) {
            console.log("해당 이메일은 없음");
            return null;
          }
          const pwcheck = await bcrypt.compare(
            credentials!.password,
            user.password
          );
          if (!pwcheck) {
            console.log("비번틀림");
            return null;
          }
          return user;
        } catch (err) {
          throw new Error(`failed To authorize`);
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30일
  },

  callbacks: {
    jwt: async ({ token, user }: any) => {
      await connectToDB();
      if (user) {
        token.user = {};
        token.user.name = user.name;
        token.user.email = user.email;
        token.user.image = user.image;
        if (user.email === "toitoii080@gmail.com" || user.role == "admin") {
          token.user.role = "admin";
        }
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      session.user = token.user;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
