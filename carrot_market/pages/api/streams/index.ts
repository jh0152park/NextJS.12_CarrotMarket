import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const user = req.session.user;
    const { name, price, description } = req.body;

    if (req.method === "POST") {
        const stream = await client.stream.create({
            data: {
                name,
                price,
                description,
                user: {
                    connect: {
                        id: user?.id,
                    },
                },
            },
        });
        res.json({
            isSuccess: true,
            stream,
        });
    } else if (req.method === "GET") {
        const streams = await client.stream.findMany();
        res.json({ isSuccess: true, streams });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET", "POST"],
        handler: handler,
    })
);
