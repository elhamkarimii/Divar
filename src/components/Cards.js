import React from 'react'
import { CardsWrraper } from './styleComponents';
import Card from "./Card";

function Cards({data}) {
    return (
        <CardsWrraper>
            <Card data={data} />
        </CardsWrraper>
    )
}

export default Cards
