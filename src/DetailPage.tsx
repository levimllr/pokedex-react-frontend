import React, { FunctionComponent } from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import DetailView from './DetailView';
import Card from './Card';
import {Pokemon} from './types/index'

interface DetailPageProps {
    allPokemon: Array<Pokemon>;
};

const DetailPage:FunctionComponent<DetailPageProps & RouteComponentProps> =
    (props: DetailPageProps) => (
        <div className="page">
            <h1>Detail Page for Pokemon #{}</h1>
        </div>
    )

export default DetailPage;
