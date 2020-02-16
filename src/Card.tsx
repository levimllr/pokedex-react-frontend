import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { PokemonAttributes } from './types/index';

interface CardProps {
  pokemon: PokemonAttributes;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => (
  <Link to={`/pokemon/${props.pokemon.pokemon_id}`}>
    <div
      className="grid"
      id={`pokemonCard-${props.pokemon.pokemon_id}`}
      key={props.pokemon.pokemon_id}
    >
      <img alt={props.pokemon.name} src={props.pokemon.sprites.front_default} />
      <h2>
        #{props.pokemon.pokemon_id} {props.pokemon.name}
      </h2>
    </div>
  </Link>
);

export default Card;
