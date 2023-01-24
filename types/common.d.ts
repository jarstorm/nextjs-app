interface CryptoData {
    data: {
        symbol: string
    }
}

interface PokemonData {
    data: {
        name: string
        url: string
    }
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