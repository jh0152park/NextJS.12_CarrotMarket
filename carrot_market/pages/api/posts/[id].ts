import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const id = req.query.id;

    const post = await client.post.findUnique({
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
            answers: {
                select: {
                    answer: true,
                    id: true,
                    user: {
                        select: {
                            id: true,
                            name: true,
                            profileImage: true,
                        },
                    },
                },
            },
            _count: {
                select: {
                    answers: true,
                    wondering: true,
                },
            },
        },
    });

    res.json({
        isSuccess: post ? true : false,
        post: post,
    });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler: handler,
    })
);
