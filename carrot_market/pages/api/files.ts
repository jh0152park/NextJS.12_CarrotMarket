import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    res.json({
        isSuccess: true,
        url: "",
    });
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler: handler,
    })
);
