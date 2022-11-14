import {NextApiRequest, NextApiResponse} from "next";

export default function email (req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body)
    res.status(200).end()
}