import React, { FunctionComponent } from 'react';
import Card from './Card';
import {PokemonAttributes} from './types/index'

interface CardGridProps {
    allPokemon: Array<PokemonAttributes>
};

const CardGrid:FunctionComponent<CardGridProps> =
    props => (
        <div className="grid-container equal-items">
            {props.allPokemon.map(pokemon => {
                return <Card key={`pokemon-${pokemon.pokemon_id}`} pokemon={pokemon} />
            })}
        </div>
    )

export default CardGrid;