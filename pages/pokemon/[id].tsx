import { GetStaticPropsContext } from "next";
import Pokemon from "../../components/pokemon/Pokemon";
import Layout from "../../layouts";

type PageParams = {
    id: string
}
export default function PokemonDetail(props: PokemonData) {
    console.log(props)
    return <Layout>
        <Pokemon data={props} />
    </Layout>
}

export async function getServerSideProps({ params }: GetStaticPropsContext<PageParams>) {
    const id = params?.id || null;
    if (id) {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json());
        return { props: data }
    }
    return { props: {} }
}
