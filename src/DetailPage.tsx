import React, { FunctionComponent } from 'react';
import DetailView from './DetailView';
import Card from './Card';
import {Pokemon} from './types/index'

interface DetailPageProps {
   pokemon: Pokemon;
   allPokemon: Array<Pokemon>;
};

const DetailPage:FunctionComponent<DetailPageProps> =
    () => (
        <div className="page">
            <h1>Detail Page</h1>
        </div>
    )

export default DetailPage;