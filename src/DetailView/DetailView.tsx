import React, { FunctionComponent } from 'react';
import { FullPokemonAttributes, Type } from '../types/index';
import './DetailView.scss';

interface DetailViewProps {
  pokemon: FullPokemonAttributes;
}

const typeStyleName = (types: Array<Type>) => {
  const prefix = 'type-' + (types.length === 1 ? 'single' : 'double') + '-';
  return prefix + types.map(type => type.type.name).join('-');
};

const typeHeader = (types: Array<Type>) => {
  return types.map(type => <div className={`type-header-${type.type.name} view-header`}>{`${type.type.name}`}</div>);
};

const DetailView: FunctionComponent<DetailViewProps> = ({ pokemon }) => (
  <div className={`view ${typeStyleName(pokemon.types)}`}>
    <div className='grid-container equal-items'>
      <div className='grid-left'>
        <h2>
          #{pokemon.pokemon_id} {pokemon.name}
        </h2>
      </div>
      <div className='grid-right'>
        <div className='view-header'>
          {pokemon.stats[5].base_stat} HP
        </div>
        {typeHeader(pokemon.types)}
      </div>
    </div>
    <div >
      <img alt={pokemon.name} src={pokemon.sprites.front_default} className='detail-sprite'/>
    </div>
    <div>
      <h3>Base XP: {pokemon.base_experience}</h3>
      <h3>Height: {pokemon.height} decimeters</h3>
      <h3>Weight: {pokemon.weight} hectograms</h3>
    </div>
    <div>

    </div>
    <div>
      <p>
        {pokemon.flavor_text}
      </p>
    </div>
  </div>
);

export default DetailView;
