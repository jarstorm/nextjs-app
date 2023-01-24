import Pokemon from "./Pokemon";
import styles from "./styles"

const PokemonList = ({ data }) => {    
    return (<div className="container">{data.results?.map(pokemon => <Pokemon data={pokemon} />)} <style jsx>{styles}</style></div>)

}

export default PokemonList;