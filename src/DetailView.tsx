import React, { FunctionComponent } from 'react';
import {Pokemon} from './types/index'

interface DetailViewProps {
   pokemon: Pokemon;
   allPokemon: Array<Pokemon>;
};

const DetailView:FunctionComponent<DetailViewProps> =
    () => (
        <div className="page">
            <h2>Detail View</h2>
        </div>
    )

export default DetailView;
