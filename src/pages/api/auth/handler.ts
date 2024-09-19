import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth/next";

import { Options } from "./[...nextauth]";

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, Options);

  if (!session) {
    return res.send({
      error:
        "please log in",
    });
  }

  const token = await getToken({ req, secret, raw: true });

  res.json({ token });
}
