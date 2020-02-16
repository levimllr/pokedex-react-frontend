import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import {PokemonAttributes, Type} from './types/index'

interface CardProps {
    pokemon: PokemonAttributes;
};

const typeStyleName = (types:Array<Type>) => {
    const prefix = "type-" + (types.length === 1 ? "single" : "double") + "-";
    return prefix + types.map(type => type.type.name).join("-");
};

const Card:FunctionComponent<CardProps> =
    (props: CardProps) => (
        <Link to={`/pokemon/${props.pokemon.pokemon_id}`}>
            <div className={`grid ${typeStyleName(props.pokemon.types)}`} 
                id={`pokemonCard-${props.pokemon.pokemon_id}`} 
                key={props.pokemon.pokemon_id}
            >
                <img alt={props.pokemon.name} src={props.pokemon.sprites.front_default}></img>
                <h2 className="card-title">#{props.pokemon.pokemon_id} {props.pokemon.name}</h2>
            </div>
        </Link>
    )

export default Card;
