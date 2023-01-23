export const getPokemon = async () => {
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/").then(res => res.json());
    console.log(pokemon)
    return pokemon;
}