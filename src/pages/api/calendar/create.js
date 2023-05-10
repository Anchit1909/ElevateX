import { getToken } from "next-auth/jwt";
import { getSession } from "next-auth/react";

export default async (req, res) => {
  try {
    const session = await getSession({ req });
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
      raw: true,
    });

    console.log("session", session);
    console.log("token", token);
    return res.status(200).json({
      status: "Ok",
      data: [],
    });
  } catch (e) {
    return res.status(400).json({
      status: e.message,
    });
  }
};
