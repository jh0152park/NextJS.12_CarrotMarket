import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    if (req.method === "GET") {
        const produts = await client.product.findMany({
            // take: 10,
            // skip: 20,
            include: {
                _count: {
                    select: {
                        favorite: true,
                    },
                },
            },
        });
        return res.json({
            isSuccess: true,
            products: produts,
        });
    } else if (req.method === "POST") {
        const { user } = req.session;
        const { name, price, description, photoId } = req.body;

        const product = await client.product.create({
            data: {
                name: name,
                price: +price,
                description: description,
                image: photoId,
                user: {
                    connect: {
                        id: user?.id,
                    },
                },
            },
        });

        res.json({
            isSuccess: true,
            product: product,
        });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET", "POST"],
        handler: handler,
    })
);
