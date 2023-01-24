import cacheData from "memory-cache";

export const setCacheData = (key: string, value: any) => {
    cacheData.put(key, value);
}

export const getCachedData = (key: string) : any => {
    return cacheData.get(key);    
}