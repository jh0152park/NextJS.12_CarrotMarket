import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const { id } = req.query;
    const { user } = req.session;

    if (!id) {
        res.json({ isSuccess: false });
    }

    const isExist = await client.favorite.findFirst({
        where: {
            productId: Number(id),
            userId: user?.id,
        },
    });

    if (isExist) {
        // delete item from favorite list
        await client.favorite.delete({
            where: {
                id: isExist.id,
            },
        });
    } else {
        // add item into favorite list
        await client.favorite.create({
            data: {
                user: {
                    connect: {
                        id: user?.id,
                    },
                },
                product: {
                    connect: {
                        id: Number(id),
                    },
                },
            },
        });
    }

    res.json({
        isSuccess: true,
    });
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler: handler,
    })
);
