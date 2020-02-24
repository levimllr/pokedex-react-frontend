import React, { FunctionComponent } from 'react';
import Card from '../Card/Card';
import { PokemonAttributes } from '../types/index';

interface CardGridProps {
  allPokemon: Array<PokemonAttributes>;
}

const CardGrid: FunctionComponent<CardGridProps> = ({ allPokemon }) => {
  return (
    <div className="grid-container equal-items">
      {allPokemon.map(pokemon => {
        return <Card key={`pokemon-${pokemon.pokemon_id}`} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default CardGrid;
