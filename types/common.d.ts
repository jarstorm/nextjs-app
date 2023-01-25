interface CryptoData {
    symbol: string
}

interface PokemonData {
    name: string
    url: string
}

interface PokemonDetail {
    id: number
    sprites: {
        back_default: string
    }
    species: {
        name: string
    }
}