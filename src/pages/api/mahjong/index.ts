import { mahjong_pai } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<mahjong_pai[]>
) {
  /* 著者リストを取得 */
  const pai = await prisma.mahjong_pai.findMany();
  res.status(200).json(pai);
}
