
export default function PokemonDetail (props) {
    console.log(props)
    return <span>Pokemon detail {props.name}</span>
}

export async function getServerSideProps({params}) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(res => res.json());
    console.log(data)
    return{props: data}
}
