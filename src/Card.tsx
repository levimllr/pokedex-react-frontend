import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import {Pokemon} from './types/index'

interface CardProps {
    pokemon: Pokemon;
};

const Card:FunctionComponent<CardProps> =
    (props: CardProps) => (
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <div className="grid" 
                id={`pokemonCard-${props.pokemon.id}`} 
                key={props.pokemon.id} 
            >
                <img alt={props.pokemon.name} src={props.pokemon.image_url}></img>
                <h2>#{props.pokemon.id} {props.pokemon.name}</h2>
            </div>
        </Link>
    )

export default Card;
