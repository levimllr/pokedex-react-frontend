import React, { FunctionComponent } from 'react';
import { FullPokemonAttributes } from './types/index';

interface DetailViewProps {
  pokemon: FullPokemonAttributes;
}

const DetailView: FunctionComponent<DetailViewProps> = ({ pokemon }) => (
  <div className="view">
    <h1>
      #{pokemon.pokemon_id} {pokemon.name}
    </h1>
    <img alt={pokemon.name} src={pokemon.sprites.front_default} />
    <h3>Height: {pokemon.height} decimeters</h3>
    <h3>Weight: {pokemon.weight} hectograms</h3>
  </div>
);

export default DetailView;
