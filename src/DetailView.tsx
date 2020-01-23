import React, { FunctionComponent } from 'react';
import {Pokemon} from './types/index'

interface DetailViewProps {
   pokemon: Pokemon;
};

const DetailView:FunctionComponent<DetailViewProps> =
    ({pokemon}) => (
        <div className="view">
            <h1>#{pokemon.id} {pokemon.name}</h1>
            <img alt={pokemon.name} src={pokemon.image_url}></img>
            <p>{pokemon.flavor_text}</p>
            <h3>Height: {pokemon.height} decimeters</h3>
            <h3>Weight: {pokemon.weight} hectograms</h3>
        </div>
    );

export default DetailView;
