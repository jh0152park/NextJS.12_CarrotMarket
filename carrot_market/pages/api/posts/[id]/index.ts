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

    const isWondering = Boolean(
        await client.wondering.findFirst({
            where: {
                postId: Number(id),
                userId: user?.id,
            },
            select: {
                id: true,
            },
        })
    );

    res.json({
        isSuccess: post ? true : false,
        post: post,
        isWondering,
    });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler: handler,
    })
);
