import React, { FunctionComponent } from 'react';

interface CardProps {
    pokemon: Pokemon
};

interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    flavor_text: string;
    image_url: string;
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
