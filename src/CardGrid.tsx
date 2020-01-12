import React, { FunctionComponent } from 'react';
import Card from './Card';
import {Pokemon} from './types/index'

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