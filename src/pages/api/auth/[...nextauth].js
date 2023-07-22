import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { adminDb } from "../../../../firebaseAdmin";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: FirestoreAdapter({
    adminDb,
  }),
  // callbacks: {
  //   session: async ({ session, token, user }) => {
  //     if (session?.user) {
  //       session.user.id = user.id;
  //     }
  //     return session;
  //   },
  // },
  // callbacks: {
  //   async jwt(token, user, account = {}, profile, isNewUser) {
  //     if (account.provider && !token[account.provider]) {
  //       token[account.provider] = {};
  //     }

  //     if (account.accessToken) {
  //       token[account.provider].accessToken = account.accessToken;
  //     }

  //     if (account.refreshToken) {
  //       token[account.provider].refreshToken = account.refreshToken;
  //     }

  //     return token;
  //   },
  // },
};

export default NextAuth(authOptions);
