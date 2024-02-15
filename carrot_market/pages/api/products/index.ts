import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const { user } = req.session;
    const { name, price, description } = req.body;

    const product = await client.product.create({
        data: {
            name: name,
            price: +price,
            description: description,
            image: "xx",
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

export default withApiSession(
    withHandler({
        method: "POST",
        handler: handler,
    })
);
