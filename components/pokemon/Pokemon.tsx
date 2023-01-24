import { Avatar, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles"

const Pokemon = (props: PokemonData) => {
    const {data} = props;
    const { name, url } = data;
    const [pokemonData, setPokemonData] = useState<PokemonDetail>();
    useEffect(() => {
        fetch(url).then(res => res.json()).then((data:PokemonDetail) => setPokemonData(data))
    }, [url])

    if (!pokemonData) {
        return;
    }
    
    const imageSrc = pokemonData.sprites?.back_default;
    const href = `/pokemon/${pokemonData.id}`;
    return (
        <div  className="pokemonCard">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {pokemonData.species?.name}
                    </Typography>
                    <Avatar alt="Remy Sharp" src={imageSrc} />
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>                    
                </CardContent>
                <CardActions>
                    <Button size="small"><Link href={href}>Learn More</Link></Button>
                </CardActions>
            </Card>
            <style jsx>{styles}</style>
        </div>
    );
}

export default Pokemon;