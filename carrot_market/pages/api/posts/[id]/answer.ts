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
    const userAnswer = req.body.answer;

    if (!id) {
        res.json({ isSuccess: false });
    }

    const post = await client.post.findUnique({
        where: {
            id: Number(id),
        },
        select: {
            id: true,
        },
    });

    if (!post) {
        return res.status(404).json({ isSuccess: false });
    }

    const answer = await client.answer.create({
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
            answer: userAnswer,
        },
    });

    res.json({
        isSuccess: true,
        answer,
    });
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler: handler,
    })
);
