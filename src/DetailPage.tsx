import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MetaPokemon, FullPokemonAttributes } from './types/index';
import DetailView from './DetailView';
import Card from './Card';

interface Props {
    allPokemon: Array<FullPokemonAttributes>;
};

const DetailPage:FunctionComponent<Props & RouteComponentProps<{ id: string}>> =
    props => {
        const pokeNum = parseInt(props.match.params.id);
        const pokemons = props.allPokemon;

        return (
        <div className="page">
          { pokeNum > 1 ? <Card pokemon={pokemons[pokeNum - 2]} /> : null }
          <DetailView pokemon={pokemons[pokeNum - 1]} />
          { pokeNum < pokemons.length - 1 ? <Card pokemon={pokemons[pokeNum]} /> : null }
        </div>
    )}

export default withRouter(DetailPage);
