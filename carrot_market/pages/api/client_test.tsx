import client from "@/libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await client.user.create({
        data: {
            email: "test1@test.com",
            name: "test",
        },
    });
    res.json({
        ok: true,
    });
}
