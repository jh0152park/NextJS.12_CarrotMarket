import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

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

    // User가 입력한 토큰이 랜덤하게 만든 토큰과 일치하면
    // 토큰을 보유한 user id를 req.session.user에 넣음
    req.session.user = {
        id: isExistToken.userId,
    };
    // 세션 저장
    await req.session.save();
    // 해당 유저가 갖고있는 토큰 모두 삭제 (쓸데없이 많이 만들 필요 없으니)
    await client.token.deleteMany({
        where: {
            userId: isExistToken.userId,
        },
    });
    res.json({
        isSuccess: true,
    });
}

export default withApiSession(
    withHandler({
        methods: ["POST"],
        handler: handler,
        isPrivate: false,
    })
);
