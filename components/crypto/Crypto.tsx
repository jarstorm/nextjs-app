import { Avatar, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles"

const Crypto = ({ data }) => {
    const { name, url } = data;
    console.log(data)
    
    const href = `/crypto/${data.symbol}`;
    return (
        <div  className="pokemonCard">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {data.symbol}
                    </Typography>
                    {/*<Avatar alt="Remy Sharp" src={imageSrc} />*/}
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

export default Crypto;