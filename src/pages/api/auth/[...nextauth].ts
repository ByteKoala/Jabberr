import NextAuth, { NextAuthOptions } from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"
import jsonwebtoken from "jsonwebtoken";
import { JWT } from "next-auth/jwt";

const expiredTime:number =Math.floor(Date.now() / 1000) + 60 * 60 * 60;
const expiredTime2:string =  "30d";

export const Options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
      TwitterProvider({
        clientId: process.env.TWITTER_ID!,
        clientSecret: process.env.TWITTER_SECRET!,
      }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
   
  ],
  jwt: {
    maxAge: 60 * 60 * 24 * 30,
    encode: ({ secret, token }) =>
      jsonwebtoken.sign(
        {
          ...token,
          subject:"a jabberr develpment",
          algorithm:  "RS256",
          issuer: "jabberr",
          expiresIn: expiredTime2,
        },
        secret
      ),
      decode: async ({ secret, token }) =>
      {
        const jwtVrfyRet  = jsonwebtoken.verify(token!, secret) as JWT;
        return jwtVrfyRet;
      },
  },
  callbacks: {
    async jwt({ token, account,profile }) {
      if (account && profile) {
        token.accessToken = account?.access_token;
        token.username = profile?.login;
      }
      return token;
    },
    async session({ session, token ,user}) {
      if (token.username) {
        session.username = token?.username;
        session.user.name = token.name;
      }
      return session;
    },
  },
};

export default NextAuth(Options);
/**
 *     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
      TwitterProvider({
        clientId: process.env.TWITTER_ID!,
        clientSecret: process.env.TWITTER_SECRET!,
      }),
 */