import { useEffect, useState } from "react";
import { getPokemon } from "../../action/pokemon";
import PokemonList from "../../components/pokemon/PokemonList";
import Layout from "../../layouts";
import { PokemonApiResponse } from "../../types/action";

const Pokemon = () => {    
    return <Layout>
        <PokemonList />
    </Layout>
}

export default Pokemon;