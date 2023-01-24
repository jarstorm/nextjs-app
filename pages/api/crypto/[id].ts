// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import _ from "lodash";

type Data = {
    name: string
}

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id } = req.query
console.log(id)
    fetch("https://api2.binance.com/api/v3/ticker/24hr").then(res => res.json()).then(data => {
        console.log("item antes")
    const item = _.find(data, d => d.symbol === id);
    console.log("item", item)
    res.status(200).json(item)
    });
}


