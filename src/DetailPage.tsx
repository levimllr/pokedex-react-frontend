import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {Pokemon} from './types/index'

interface Props {
    allPokemon: Array<Pokemon>;
};

const DetailPage:FunctionComponent<Props & RouteComponentProps<{ id: string}>> =
    props => {
        const pokeNum = parseInt(props.match.params.id);

        return (
        <div className="page">
    <h1>Detail Page for #{pokeNum}</h1>

        </div>
    )}

export default withRouter(DetailPage);
