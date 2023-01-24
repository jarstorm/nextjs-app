import { useEffect, useState } from "react";
import { getCrypto } from "../../action/crypto";
import Layout from "../../layouts";
import CryptoList from "../../components/crypto/CryptoList";

const Crypto = () => {
    const [cryptoList, setCryptoList] = useState([]);

    useEffect(() => { getCrypto().then(data => setCryptoList(data)) }, []);

    return <Layout>
        <CryptoList data={cryptoList} />
    </Layout>
}

export default Crypto;