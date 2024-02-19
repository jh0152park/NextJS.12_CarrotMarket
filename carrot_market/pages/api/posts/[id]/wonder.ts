import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const id = req.query.id;
    const user = req.session.user;

    if (!id) {
        res.json({ isSuccess: false });
    }

    const isExist = await client.wondering.findFirst({
        where: {
            userId: user?.id,
            postId: Number(id),
        },
        select: {
            id: true,
        },
    });

    if (isExist) {
        await client.wondering.delete({
            where: {
                id: isExist.id,
            },
        });
    } else {
        await client.wondering.create({
            data: {
                user: {
                    connect: {
                        id: user?.id,
                    },
                },
                post: {
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
