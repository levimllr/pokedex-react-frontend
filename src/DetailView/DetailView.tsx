import React, { FunctionComponent } from 'react';
import { FullPokemonAttributes, Type, Stat, Move } from '../types/index';
import './DetailView.scss';

interface DetailViewProps {
  pokemon: FullPokemonAttributes;
}

const typeStyleName = (types: Array<Type>) => {
  const prefix = 'type-' + (types.length === 1 ? 'single' : 'double') + '-';
  return prefix + types.map(type => type.type.name).join('-');
};

const typeHeader = (types: Array<Type>) => {
  return types.map(type => (
    <div className={`type-header-${type.type.name} view-header`}>
      {type.type.name}
    </div>
  ));
};

const heightConverter = (height: number) => {
  const decimetersPerInch = 3.93701;
  const totalInches = Math.round(height * decimetersPerInch);
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  let heightString = '';
  if (feet > 0) {
    heightString += `${feet}' `;
  }
  heightString += `${inches}"`;
  return heightString;
};

const weightConverter = (weight: number) => {
  const poundsPerHectogram = 0.220462;
  const pounds = Math.round(weight * poundsPerHectogram);
  return `${pounds} lbs`;
};

const statFormatter = (stats: Array<Stat>) => {
  // pay HP no mind: it's at the top of the card!
  stats.pop();
  return stats.map(stat => (
    <tr>
      <td className="align-cell-right">
        {capitalizeFirstLetter(stat.stat.name)}
      </td>
      <td className="align-cell-right">{stat.base_stat}</td>
    </tr>
  ));
};

const moveFormatter = (moves: Array<Move>) => {
  let moveSample = [];
  for (let i = 0; i < 5; i++) {
    moveSample.push(moves[Math.floor(Math.random() * moves.length)]);
  }
  return moveSample.map(move => (
    <tr>
      <td className="align-cell-left">
        {capitalizeFirstLetter(move.move.name)}
      </td>
    </tr>
  ));
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const DetailView: FunctionComponent<DetailViewProps> = ({ pokemon }) => (
  <div className={`view ${typeStyleName(pokemon.types)}`}>
    <div className="grid-container equal-items">
      <div className="grid-left justified-self-left">
        <h2>
          #{pokemon.pokemon_id} {pokemon.name}
        </h2>
      </div>
      <div className="grid-right justified-self-right">
        <div className="view-header">{pokemon.stats[5].base_stat} HP</div>
        {typeHeader(pokemon.types)}
      </div>
    </div>
    <div>
      <img
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
        className="detail-sprite"
      />
    </div>
    <div>
      <div className="view-profile">Base XP: {pokemon.base_experience}.</div>
      <div className="view-profile">
        Height: {heightConverter(pokemon.height)}.
      </div>
      <div className="view-profile">
        Weight: {weightConverter(pokemon.weight)}.
      </div>
    </div>
    <div className="view-stats grid-container equal-items">
      <div className="grid-left justified-self-right">
        <table>
          <thead>
            <tr>
              <th className="align-cell-right" colSpan={2}>Starting Stats</th>
            </tr>
          </thead>
          {statFormatter(pokemon.stats)}
        </table>
      </div>
      <div className="grid-right justified-self-left">
        <table>
          <thead>
            <tr>
              <th className="align-cell-left" colSpan={2}>Learnable Moves</th>
            </tr>
          </thead>
          {moveFormatter(pokemon.moves)}
        </table>
      </div>
    </div>
    <div className="view-flavor">{pokemon.flavor_text}</div>
  </div>
);

export default DetailView;
