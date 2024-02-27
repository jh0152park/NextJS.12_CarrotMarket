import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const user = req.session.user;
    const purchases = await client.purchase.findMany({
        where: {
            userId: user?.id,
        },
        include: {
            product: {
                include: {
                    _count: {
                        select: {
                            favorite: true,
                        },
                    },
                },
            },
        },
    });

    res.json({
        isSuccess: true,
        purchases,
    });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler: handler,
    })
);
