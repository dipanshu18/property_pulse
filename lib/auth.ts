import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID! ?? "",
      clientSecret: process.env.GOOGLE_SECRET! ?? "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET! ?? "",
  pages: {
    signOut: "/",
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session, user }: any) {
      if (session && session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};
