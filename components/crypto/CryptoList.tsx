import Crypto from "./Crypto";
import styles from "./styles"

const CryptoList = ({ data }) => {
    
    return (<div className="container">{data.map(crypto => <Crypto data={crypto} />)} <style jsx>{styles}</style></div>)

}

export default CryptoList;