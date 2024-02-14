import { NextApiRequest, NextApiResponse } from "next";
type TMethod = "GET" | "POST" | "PUT" | "DELETE";
type THandler = (req: NextApiRequest, res: NextApiResponse) => void;

export interface IResponseType {
    isSuccess: boolean;
    [key: string]: any;
}

interface IConfigProps {
    method: TMethod;
    handler: THandler;
    isPrivate?: boolean;
}

export default function withHandler({
    method,
    handler,
    isPrivate = true,
}: IConfigProps) {
    return async function (
        req: NextApiRequest,
        res: NextApiResponse
    ): Promise<any> {
        if (req.method !== method) {
            return res.status(405).end();
        }

        if (isPrivate && !req.session.user) {
            return res.status(401).json({
                isSuccess: false,
                message: "Please login",
            });
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
