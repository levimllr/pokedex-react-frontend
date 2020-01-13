import React, { FunctionComponent, MouseEvent } from 'react';
import {Pokemon} from './types/index'

interface CardProps {
    pokemon: Pokemon;
    showDetails: (pokeNum: number) => void;
};

const Card:FunctionComponent<CardProps> =
    ({ pokemon, showDetails }) => (
        <div className="grid" 
            id={`pokemonCard-${pokemon.id}`} 
            key={pokemon.id} 
            onClick={() => showDetails(pokemon.number)} 
        >
            <img src={pokemon.image_url}></img>
            <h2>#{pokemon.id} {pokemon.name}</h2>
        </div>
    )

export default Card;
