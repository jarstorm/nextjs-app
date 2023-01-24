// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getCachedData, setCacheData } from '../../../cache/cache';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any[]>
) {
    const cachedData: any[] = getCachedData("cryptoData");    
    if (cachedData && cachedData.length > 0) {        
        res.status(200).json(cachedData)        
        return;
    } 

    fetch("https://api2.binance.com/api/v3/ticker/24hr").then(res => res.json()).then(data => {        
        const fewData = data.slice(0, 100);
        setCacheData("cryptoData", fewData);
        res.status(200).json(fewData)
    });
}
