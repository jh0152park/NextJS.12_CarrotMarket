import client from "@/libs/server/client";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";
import { withApiSession } from "@/libs/server/withSession";

async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IResponseType>
) {
    if (req.method === "GET") {
        const profile = await client.user.findUnique({
            where: {
                id: req.session.user?.id,
            },
        });

        res.json({
            isSuccess: true,
            profile,
        });
    } else if (req.method === "POST") {
        const user = req.session.user;
        const { email, phone, name } = req.body;
        const currentUser = await client.user.findUnique({
            where: {
                id: user?.id,
            },
        });

        if (email && email !== currentUser?.email) {
            const isAlreadyExist = Boolean(
                await client.user.findUnique({
                    where: {
                        email,
                    },
                    select: {
                        id: true,
                    },
                })
            );

            if (isAlreadyExist) {
                return res.json({
                    isSuccess: false,
                    error: "Email already exists",
                });
            }

            await client.user.update({
                where: {
                    id: user?.id,
                },
                data: {
                    email,
                },
            });
            res.json({
                isSuccess: true,
            });
        }
        if (phone && phone !== currentUser?.phoneNumber) {
            const isAlreadyExist = Boolean(
                await client.user.findUnique({
                    where: {
                        phoneNumber: phone,
                    },
                    select: {
                        id: true,
                    },
                })
            );

            if (isAlreadyExist) {
                return res.json({
                    isSuccess: false,
                    error: "Phone number already exists",
                });
            }

            await client.user.update({
                where: {
                    id: user?.id,
                },
                data: {
                    phoneNumber: phone,
                },
            });
            res.json({
                isSuccess: true,
            });
        }
        if (name) {
            // name can be duplicated
            await client.user.update({
                where: {
                    id: user?.id,
                },
                data: {
                    name,
                },
            });
        }

        res.json({
            isSuccess: true,
        });
    }
}

export default withApiSession(
    withHandler({
        methods: ["GET", "POST"],
        handler: handler,
    })
);
