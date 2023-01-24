import { GetStaticPropsContext } from "next";
import Layout from "../../layouts";

type PageParams = {
    id: string
 }

export default function CryptoDetail (props) {
    console.log(props)
    return <Layout><span>Crypto detail {props.name}</span></Layout>
}

export async function getServerSideProps({params}: GetStaticPropsContext<PageParams>) {    
    const id = params?.id || null;
    if (id) {
        const data = await fetch(`http://localhost:3000/api/crypto/${params.id}`).then(res => res.json());    
        return{props: data}
    }
    return {props: {}}
    
}
