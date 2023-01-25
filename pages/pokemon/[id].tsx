import { GetStaticPropsContext } from "next";
import Pokemon from "../../components/pokemon/Pokemon";
import Layout from "../../layouts";

type PageParams = {
    id: string
}
export default function PokemonDetail(props: PokemonData) {    
    return <Layout>
        <Pokemon data={props} />
    </Layout>
}

export async function getServerSideProps({ params }: GetStaticPropsContext<PageParams>) {
    const id = params?.id || null;
    console.log(params, id)
    if (id && id !== "undefined") {
        console.log("entro")
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json());
        return { props: data }
    }
    return { props: {} }
}
