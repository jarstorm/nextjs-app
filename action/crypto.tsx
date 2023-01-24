import { CRYPTO_API_URL } from "../constants";
import { CryptoApiResponse } from "../types/action";

export const getCrypto = async (page: number, pageSize: number): Promise<CryptoApiResponse> => {
    const data = await fetch(CRYPTO_API_URL).then(res => res.json());    
    const total = data.length;
    const initial = page * pageSize;
    const final = initial + pageSize;
    return {total, results: data.slice(initial, final)};
}

