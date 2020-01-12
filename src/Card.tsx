import React, { FunctionComponent } from 'react';
import {Pokemon} from './types/index'

interface CardProps {
    pokemon: Pokemon
};

const Card:FunctionComponent<CardProps> =
    ({ pokemon }) => (
        <div className="grid">
            <img src={pokemon.image_url}></img>
            <h2>#{pokemon.id} {pokemon.name}</h2>
            <h3></h3>
            <p>{pokemon.flavor_text}</p>
            <ul>
                <li>Height: {pokemon.height}</li>
                <li>Weight: {pokemon.weight}</li>
            </ul>
        </div>
    )

export default Card;
