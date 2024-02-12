import client from "@/libs/server/client";
import smtpTransport from "@/libs/server/email";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    const { email, phoneNumber } = req.body;
    const user = phoneNumber
        ? { phoneNumber: phoneNumber }
        : email
          ? { email: email }
          : null;

    if (!user) {
        return res.status(400).json({
            isSuccess: false,
        });
    }

    const payload = Math.floor(100000 + Math.random() * 900000) + "";

    console.log(req.body);
    console.log(email);

    // /**
    //  * upsert는 update & insert 의 합성어로
    //  * 말 그대로 업데이트 하거나 새로운걸 추가할때 사용함
    //  *
    //  * client.user.findUnique({
    //  *      where: {
    //  *      email: email
    //  *     }
    //  *  })
    //  * 이렇게 유저가 DB에 있는지 먼저 찾아내고
    //  * client.user.create({
    //  *     data: {
    //  *         name: "",
    //  *         email: email
    //  *     }
    //  * })
    //  * 이렇게 유저를 생성할 필요 없이 upsert를 사용해서
    //  * where: 조건에 맞는 데이터가 있는지 확인하고
    //  * create: 조건에 맞는 데이터가 없다면 생성하고
    //  * update: 조건에 맞는 데이터가 있다면 업데이트
    //  * 를 바로 할 수 있다
    //  */
    // const user = await client.user.upsert({
    //     where: {
    //         /**
    //          *
    //          * ...()를 사용하면 오브젝트 안에서도 조건식을 사용할 수 있음
    //          * ...(email && { email: email }),
    //          * ...(phoneNumber && { phoneNumber: +phoneNumber }),
    //          * 참고로 위 && 수식은 email ? {email: email} : {}하고 같은 의미
    //          *
    //          * 하지만 계속 비슷한 형태의 조건을 확인하는 것 조차 where, create에서 중복이 되므로
    //          * payload라는 변수를 만들어서 중복없이 바로 사용이 가능함
    //          */
    //         ...payload,
    //     },
    //     create: {
    //         name: "Anonymous",
    //         ...payload,
    //     },
    //     update: {
    //         // nothing to do
    //     },
    // });

    // console.log(user);

    const token = await client.token.create({
        data: {
            playload: payload,
            user: {
                /**
                 * upsert를 사용해서 유져가 있는지 찾고, 없다면 생성하도록 한 다음
                 * 토큰을 생성해 생성한 토큰과 만들어진 유져를 서로 연결시켜주는 작업을 하는데
                 *
                 * 토큰을 생성할때 connectOrCreate를 사용하면 user.upsert를 사용하지 않고도
                 * 동일한 로직을 수행할 수 있다.
                 *
                 * 즉 connectOrCreate where로 user가 존재하는지 찾고
                 * 없다면 create user를 한다
                 *
                 * 그리고 생성된 or 찾은 유저를 token.user에 넣어주는 것
                 *
                 * 이렇게 하면 DB에 유저가 있는지 없는지 찾고 생성하는 과정이 줄어들 수 있음
                 */
                connectOrCreate: {
                    where: {
                        ...user,
                    },
                    create: {
                        name: "Anonymous",
                        ...user,
                    },
                },
            },
        },
    });

    // Free Account를 사용하고 있기 때문에
    // 지속적으로 테스트로 인해 토큰을 유저에게 전달하게 되면
    // 무료 할당량을 초과할 수 있으므로 일단 주석처리

    // if (phoneNumber) {
    //     await twilioClient.messages.create({
    //         messagingServiceSid: process.env.TWILIO_MESSAGE_SID,
    //         to: process.env.PHONE_NUMBER!,
    //         body: `Your login token is ${payload}`,
    //     });
    // } else if (email) {
    //     const mailOptions = {
    //         from: process.env.MAIL_ID,
    //         to: email,
    //         subject: "Nomad Carrot Authentication Email",
    //         text: `Authentication Code : ${payload}`,
    //     };
    //     const result = await smtpTransport.sendMail(
    //         mailOptions,
    //         (error, responses) => {
    //             if (error) {
    //                 console.log("occurred error while sending mail");
    //                 console.log(error);
    //                 return null;
    //             } else {
    //                 console.log(responses);
    //                 return null;
    //             }
    //         }
    //     );
    //     smtpTransport.close();
    //     console.log(result);
    // }

    console.log(token);
    return res.json({
        isSuccess: true,
    });
}

export default withHandler("POST", handler);
