import client from "@/libs/server/client";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // client

    if (req.method !== "POST") {
        res.status(401).end();
    }
    res.json({
        status: 200,
        message: "done",
    });
    // res.status(200).end();
}
