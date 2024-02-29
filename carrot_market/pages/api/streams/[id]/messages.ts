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
    const message = req.body.message;

    const sendMessage = await client.message.create({
        data: {
            message,
            stream: {
                connect: {
                    id: Number(id),
                },
            },
            user: {
                connect: {
                    id: user?.id,
                },
            },
        },
    });

    res.json({
        isSuccess: sendMessage ? true : false,
        message: sendMessage,
    });
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler: handler,
    })
);
