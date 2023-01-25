import { useEffect, useState } from "react";
import { getPokemon } from "../../action/pokemon";
import { PokemonApiResponse } from "../../types/action";
import Pokemon from "./Pokemon";
import styles from "./styles"

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);

    useEffect(() => { getPokemon().then(data => setPokemonList(data.results)) }, []);


    return (
        <div className="container">
            { pokemonList.map(pokemon => <Pokemon data={pokemon} key={pokemon.name} />) }
            <style jsx>{styles}</style>
        </div>
    )

}

export default PokemonList;