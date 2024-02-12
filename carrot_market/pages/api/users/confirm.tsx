import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const { token } = req.body;

    console.log(`received token at api/users/confirm side is: ${token}`);
    res.status(200).end();
}

export default withHandler("POST", handler);
