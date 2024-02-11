import client from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { email, phoneNumber } = req.body;
    const payload = phoneNumber
        ? { phoneNumber: +phoneNumber }
        : { email: email };

    console.log(req.body);

    /**
     * upsert는 update & insert 의 합성어로
     * 말 그대로 업데이트 하거나 새로운걸 추가할때 사용함
     *
     * client.user.findUnique({
     *      where: {
     *      email: email
     *     }
     *  })
     * 이렇게 유저가 DB에 있는지 먼저 찾아내고
     * client.user.create({
     *     data: {
     *         name: "",
     *         email: email
     *     }
     * })
     * 이렇게 유저를 생성할 필요 없이 upsert를 사용해서
     * where: 조건에 맞는 데이터가 있는지 확인하고
     * create: 조건에 맞는 데이터가 없다면 생성하고
     * update: 조건에 맞는 데이터가 있다면 업데이트
     * 를 바로 할 수 있다
     */
    const user = await client.user.upsert({
        where: {
            /**
             *
             * ...()를 사용하면 오브젝트 안에서도 조건식을 사용할 수 있음
             * ...(email && { email: email }),
             * ...(phoneNumber && { phoneNumber: +phoneNumber }),
             * 참고로 위 && 수식은 email ? {email: email} : {}하고 같은 의미
             *
             * 하지만 계속 비슷한 형태의 조건을 확인하는 것 조차 where, create에서 중복이 되므로
             * payload라는 변수를 만들어서 중복없이 바로 사용이 가능함
             */
            ...payload,
        },
        create: {
            name: "Anonymous",
            ...payload,
        },
        update: {
            // nothing to do
        },
    });

    console.log(user);

    return res.status(200).end();
}

export default withHandler("POST", handler);
