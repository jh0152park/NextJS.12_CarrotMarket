import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const profile = await client.user.findUnique({
        where: {
            id: req.session.user?.id,
        },
    });

    res.json({
        isSuccess: true,
        profile,
    });
}

export default withApiSession(withHandler("GET", handler));
