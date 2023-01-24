import Layout from "../../layouts";

export default function CryptoDetail (props) {
    console.log(props)
    return <Layout><span>Crypto detail {props.name}</span></Layout>
}

export async function getServerSideProps({params}) {
    console.log("llamando crypto detail")
    const data = await fetch(`http://localhost:3000/api/crypto/${params.id}`).then(res => res.json());
    console.log("fin crypto detail", data)
    return{props: data}
}
