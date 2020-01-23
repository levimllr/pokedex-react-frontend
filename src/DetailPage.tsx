import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Pokemon } from './types/index';
import DetailView from './DetailView';
import Card from './Card';

interface Props {
    allPokemon: Array<Pokemon>;
};

const DetailPage:FunctionComponent<Props & RouteComponentProps<{ id: string}>> =
    props => {
        const pokeNum = parseInt(props.match.params.id);

        return (
        <div className="page">
          { pokeNum > 1 ? <Card pokemon={props.allPokemon[pokeNum - 2]} /> : null }
          <DetailView pokemon={props.allPokemon[pokeNum - 1]} />
          <Card pokemon={props.allPokemon[pokeNum]} />
        </div>
    )}

export default withRouter(DetailPage);
