import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const user = req.session.user;
    const question = req.body.question;

    const post = await client.post.create({
        data: {
            question: question,
            user: {
                connect: {
                    id: user?.id,
                },
            },
        },
    });

    res.json({
        isSuccess: true,
        post: post,
    });
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler: handler,
    })
);
