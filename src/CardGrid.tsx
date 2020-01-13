import React, { FunctionComponent, MouseEvent, Props } from 'react';
import Card from './Card';
import {Pokemon} from './types/index'

interface CardGridProps {
    allPokemon: Array<Pokemon>,
    showDetails: (event: React.MouseEvent<HTMLDivElement>) => void;
};

const CardGrid:FunctionComponent<CardGridProps> =
    ({ allPokemon, showDetails }) => (
        <div className="grid">
            {allPokemon.map(pokemon => <Card key={`pokemon-${pokemon.id}`} pokemon={pokemon} showDetails={showDetails}/>)}
        </div>
    )

export default CardGrid;