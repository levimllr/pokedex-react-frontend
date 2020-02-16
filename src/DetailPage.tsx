import React, { FunctionComponent, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PokemonAttributes, FullPokemonAttributes } from './types/index';
import DetailView from './DetailView';
import Card from './Card';
import pokeload from './pikapokeball.gif';

interface Props {
  allPokemon: Array<PokemonAttributes>;
}

const DetailPage: FunctionComponent<Props &
  RouteComponentProps<{ id: string }>> = props => {
  const [onePokemon, setOnePokemon] = useState<FullPokemonAttributes | null>(
    null
  );

  const pokeNum = parseInt(props.match.params.id);
  const pokemons = props.allPokemon;

  useEffect(() => {
    const fetchOnePokemon = () => {
      fetch(`http://localhost:3001/api/v1/pokemon/${pokeNum}`)
        .then(resp => resp.json())
        .then(json => setOnePokemon(json.data.attributes));
    };
    fetchOnePokemon();
  }, [pokeNum]);

  if (onePokemon) {
    return (
      <div className="page grid-container display-items">
        {pokeNum > 1 ? <Card pokemon={pokemons[pokeNum - 2]} /> : <div />}
        <DetailView pokemon={onePokemon} />
        {pokeNum < pokemons.length - 1 ? (
          <Card pokemon={pokemons[pokeNum]} />
        ) : (
          <div />
        )}
      </div>
    );
  } else {
    return <img src={pokeload} alt="Pikachu Pokeball" />;
  }
};

export default withRouter(DetailPage);
