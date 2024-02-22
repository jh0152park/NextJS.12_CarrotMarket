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
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    if (req.method === "POST") {
        const post = await client.post.create({
            data: {
                question: question,
                latitude: latitude,
                longitude: longitude,
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
    } else if (req.method === "GET") {
        const posts = await client.post.findMany({
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        profileImage: true,
                    },
                },
                _count: {
                    select: {
                        wondering: true,
                        answers: true,
                    },
                },
            },
        });
        res.json({
            isSuccess: true,
            post: posts,
        });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET", "POST"],
        handler: handler,
    })
);
