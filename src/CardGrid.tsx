import React, { FunctionComponent, MouseEvent, Props } from 'react';
import Card from './Card';
import {Pokemon} from './types/index'

interface CardGridProps {
    allPokemon: Array<Pokemon>
};

const CardGrid:FunctionComponent<CardGridProps> =
    (props: CardGridProps) => (
        <div className="grid">
            {props.allPokemon.map(pokemon => {
                return <Card key={`pokemon-${pokemon.id}`} pokemon={pokemon} />
            })}
        </div>
    )

export default CardGrid;