import { useEffect, useState } from "react";
import { getPokemon } from "../../action/pokemon";
import PokemonList from "../../components/Pokemon/PokemonList";
import Layout from "../../layouts";

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => { getPokemon().then(data => setPokemonList(data)) }, []);

    return <Layout>
        <>
            <h1>Pokemon List</h1>
            <PokemonList data={pokemonList} />
        </>
    </Layout>
}

export default Pokemon;