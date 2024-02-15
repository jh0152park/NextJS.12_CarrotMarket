import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const { id } = req.query;

    if (!id) {
        res.json({ isSuccess: false });
    }

    const product = await client.product.findUnique({
        where: {
            id: Number(id),
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    profileImage: true,
                },
            },
        },
    });

    res.json({ isSuccess: true, product: product });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler: handler,
    })
);
