import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const response = await (
        await fetch(
            `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ID}/images/v2/direct_upload`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.CF_TOKEN}`,
                },
            }
        )
    ).json();

    console.log(response);

    res.json({
        isSuccess: true,
        ...response.result,
    });
}

export default withApiSession(
    withHandler({
        methods: ["GET"],
        handler: handler,
    })
);
