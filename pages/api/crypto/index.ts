// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    fetch("https://api2.binance.com/api/v3/ticker/24hr").then(res => res.json()).then(data => {
    console.log(data)
    res.status(200).json(data)
    });
}


