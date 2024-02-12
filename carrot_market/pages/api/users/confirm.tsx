import { cookies } from "next/headers";
import { withIronSessionApiRoute } from "iron-session/next";
import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

declare module "iron-session" {
    interface IronSessionData {
        user?: {
            id: number;
        };
    }
}

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const { token } = req.body;
    const isExistToken = await client.token.findUnique({
        where: {
            playload: token,
        },
        // include: { user: true } 유저에 대한 정보도 같이 받아올 수 있음
    });

    if (!isExistToken) {
        return res.status(404).end();
    }

    console.log(`received token at api/users/confirm side is: ${token}`);
    req.session.user = {
        id: isExistToken.userId,
    };
    // user에게 쿠키 주기
    await req.session.save();
    res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
    cookieName: "carrotsession",
    password:
        "carrotmarkettestpassword1!carrotmarkettestpassword1!carrotmarkettestpassword1!carrotmarkettestpassword1!",
});
