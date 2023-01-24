import { useEffect, useState } from "react";
import { getPokemon } from "../../action/pokemon";
import PokemonList from "../../components/pokemon/PokemonList";
import Layout from "../../layouts";
import { PokemonApiResponse } from "../../types/action";

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState<PokemonApiResponse>([]);

    useEffect(() => { getPokemon().then(data => setPokemonList(data)) }, []);

    return <Layout>
        <PokemonList data={pokemonList} />
    </Layout>
}

export default Pokemon;