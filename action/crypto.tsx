export const getCrypto = async () => {
    const data = await fetch("http://localhost:3000/api/crypto").then(res => res.json());    
    console.log(data)
    return data.slice(0, 20);
}

