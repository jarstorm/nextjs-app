// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import _ from "lodash";
import { getCachedData, setCacheData } from '../../../cache/cache';

type Data = {
    name: string
}

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { id } = req.query


    const cachedData = getCachedData("cryptoData");    
    if (cachedData && cachedData.length > 0) {        
        const item = _.find(cachedData, d => d.symbol === id);
        res.status(200).json(item)        
        return;
    } 

    fetch("https://api2.binance.com/api/v3/ticker/24hr").then(res => res.json()).then(data => {        
        setCacheData("cryptoData", data.slice(0, 100));
        const item = _.find(data.slice(0, 100), d => d.symbol === id);
        res.status(200).json(item)
    });
}


