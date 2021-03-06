import React, { FunctionComponent } from 'react';
import { FullPokemonAttributes, Type, Stat, Move } from '../types/index';
import './DetailView.scss';
import pokeload from '../assets/pikapokeball.gif';
import {
  capitalizeFirstLetter,
  heightConverter,
  weightConverter,
} from '../helpers';

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

const statFormatter = (stats: Array<Stat>) => {
  return stats.slice(0, 5).map(stat => (
    <tr>
      <td className="align-cell-right">
        {capitalizeFirstLetter(stat.stat.name)}
      </td>
      <td className="align-cell-right">{stat.base_stat}</td>
    </tr>
  ));
};

// sample five random moves from the pokemon's list of moves and
// format them for display
const moveFormatter = (moves: Array<Move>) => {
  let moveSample = [];
  for (let i = 0; i < 5; i++) {
    let move = moves.slice(Math.floor(Math.random() * moves.length))[0];
    moveSample.push(move);
  }
  return moveSample.map(move => (
    <tr>
      <td className="align-cell-left">
        {capitalizeFirstLetter(move.move.name)}
      </td>
    </tr>
  ));
};

const DetailView: FunctionComponent<DetailViewProps> = ({ pokemon }) => {
  if (pokemon) {
    return (
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
          <div className="view-profile">
            Base XP: {pokemon.base_experience}.
          </div>
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
                  <th className="align-cell-right" colSpan={2}>
                    Starting Stats
                  </th>
                </tr>
              </thead>
              {statFormatter(pokemon.stats)}
            </table>
          </div>
          <div className="grid-right justified-self-left">
            <table>
              <thead>
                <tr>
                  <th className="align-cell-left" colSpan={2}>
                    Learnable Moves
                  </th>
                </tr>
              </thead>
              {moveFormatter(pokemon.moves)}
            </table>
          </div>
        </div>
        <div className="view-flavor">{pokemon.flavor_text}</div>
      </div>
    );
  } else {
    return <img src={pokeload} alt="Pikachu Pokeball" />;
  }
};

export default DetailView;
