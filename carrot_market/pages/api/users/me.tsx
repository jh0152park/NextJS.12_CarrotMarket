import { cookies } from "next/headers";
import { withIronSessionApiRoute } from "iron-session/next";
import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    console.log(req.session.user);
    const profile = await client.user.findUnique({
        where: {
            id: req.session.user?.id,
        },
    });

    res.json({
        isSuccess: true,
        profile,
    });
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
    cookieName: "carrotsession",
    password:
        "carrotmarkettestpassword1!carrotmarkettestpassword1!carrotmarkettestpassword1!carrotmarkettestpassword1!",
});
