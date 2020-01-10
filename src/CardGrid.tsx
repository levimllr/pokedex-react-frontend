import React, { FunctionComponent } from 'react';
import Card from './Card';

interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    flavor_text: string;
    image_url: string;
};

interface CardGridProps {
    allPokemon: Array<Pokemon>
};

const CardGrid:FunctionComponent<CardGridProps> =
    ({ allPokemon }) => (
        <div className="grid">
            {allPokemon.map(pokemon => <Card pokemon={pokemon} />)}
        </div>
    )

export default CardGrid;