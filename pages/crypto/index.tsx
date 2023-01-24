import { useEffect, useState } from "react";
import { getCrypto } from "../../action/crypto";
import Layout from "../../layouts";
import CryptoList from "../../components/crypto/CryptoList";

const Crypto = () => {
    
    return <Layout>
        <CryptoList />
    </Layout>
}

export default Crypto;