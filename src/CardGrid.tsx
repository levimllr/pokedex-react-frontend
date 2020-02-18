import React, { FunctionComponent, useEffect } from 'react';
import Card from './Card';
import { PokemonAttributes } from './types/index';

interface CardGridProps {
  allPokemon: Array<PokemonAttributes>;
  handleUnmount: () => void;
}

const CardGrid: FunctionComponent<CardGridProps> = props => {
  // ensure search component is unmounted when cardgrid is unmounted
  useEffect(() => {
    return () => props.handleUnmount();
  }, []);

  return (
    <div className="grid-container equal-items">
      {props.allPokemon.map(pokemon => {
        return <Card key={`pokemon-${pokemon.pokemon_id}`} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default CardGrid;
