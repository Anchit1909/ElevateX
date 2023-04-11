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
  adapter: FirestoreAdapter({
    adminDb,
  }),
};

export default NextAuth(authOptions);
