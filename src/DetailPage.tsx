import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import {Pokemon} from './types/index'

interface Props {
    allPokemon: Array<Pokemon>;
};

const DetailPage:FunctionComponent<Props & RouteComponentProps<{ id: string}>> =
    props => {
        return (
        <div className="page">
            <h1>Detail Page for Pokemon #{props.match.params.id}</h1>

        </div>
    )}

export default withRouter(DetailPage);
