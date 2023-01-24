import cacheData from "memory-cache";

export const setCacheData = (key: string, value: object) => {
    cacheData.put(key, value);
}

export const getCachedData = (key: string) : object => {
    return cacheData.get(key);    
}