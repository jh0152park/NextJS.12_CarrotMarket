import { NextApiRequest, NextApiResponse } from "next";

type TMethod = "GET" | "POST" | "PUT" | "DELETE";
type THandler = (req: NextApiRequest, res: NextApiResponse) => void;

export default function withHandler(method: TMethod, handler: THandler) {
    return async function (req: NextApiRequest, res: NextApiResponse) {
        if (req.method !== method) {
            return res.status(405).end();
        }
        try {
            await handler(req, res);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error: error,
            });
        }
    };
}
