// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getCachedData, setCacheData } from '../../../cache/cache';

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const cachedData = getCachedData("cryptoData");    
    if (cachedData && cachedData.length > 0) {        
        res.status(200).json(cachedData)        
        return;
    } 

    fetch("https://api2.binance.com/api/v3/ticker/24hr").then(res => res.json()).then(data => {        
        setCacheData("cryptoData", data.slice(0, 100));
        res.status(200).json(data)
    });
}
