import { POKEMON_API_URL } from "../constants";
import { PokemonApiResponse } from "../types/action";

export const getPokemon = async (): Promise<PokemonApiResponse> => {
    return await fetch(POKEMON_API_URL).then(res => res.json());
}