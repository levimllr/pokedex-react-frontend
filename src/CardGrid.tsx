import React, { FunctionComponent, useEffect } from 'react';
import Card from './Card';
import { PokemonAttributes } from './types/index';

interface CardGridProps {
  allPokemon: Array<PokemonAttributes>;
  handleUnmount: () => void;
}

const CardGrid: FunctionComponent<CardGridProps> = ({
  allPokemon,
  handleUnmount,
}) => {
  // ensure search component is unmounted when cardgrid is unmounted
  useEffect(() => {
    return () => handleUnmount();
  }, [handleUnmount]);

  return (
    <div className="grid-container equal-items">
      {allPokemon.map(pokemon => {
        return <Card key={`pokemon-${pokemon.pokemon_id}`} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default CardGrid;
