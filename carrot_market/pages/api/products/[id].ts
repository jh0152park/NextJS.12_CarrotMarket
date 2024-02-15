import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const { id } = req.query;

    if (!id) {
        res.json({ isSuccess: false });
    }

    const product = await client.product.findUnique({
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
        },
    });

    const related = product?.name.split(" ").map((word) => ({
        name: {
            contains: word,
        },
    }));

    const relatedProduct = await client.product.findMany({
        where: {
            OR: related,
            AND: {
                id: {
                    not: product?.id,
                },
            },
        },
    });

    res.json({
        isSuccess: true,
        product: product,
        relatedProduct: relatedProduct,
    });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler: handler,
    })
);
