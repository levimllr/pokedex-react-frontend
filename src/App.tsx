import React, { useState, useEffect, FunctionComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import './App.css';
import Nav from './Nav';
import CardGrid from './CardGrid';
import DetailPage from './DetailPage';
import pokeload from './pikapokeball.gif';
import { AllPokemonAPI, MetaPokemon, PokemonAttributes } from './types/index';

const App: FunctionComponent<RouteComponentProps> = () => {
  const [allPokemon, setAllPokemon] = useState<Array<PokemonAttributes>>([]);
  // const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

  const fetchAllPokemon = () => {
    fetch('http://localhost:3001/api/v1/pokemon')
      .then(resp => resp.json())
      .then(json => formatAllPokemonResponse(json));
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const formatAllPokemonResponse = (json: AllPokemonAPI) => {
    let parsedData = json.data.map(
      (pokemon: MetaPokemon) => pokemon.attributes
    );
    setAllPokemon(parsedData);
  };

  return (
    <div className="App">
      <Nav numberOfPokemon={allPokemon.length} />
      {allPokemon.length > 0 ? (
        <Switch>
          <Route exact path="/pokemon">
            <CardGrid allPokemon={allPokemon} />
          </Route>
          <Route path="/pokemon/:id">
            <DetailPage allPokemon={allPokemon} />
          </Route>
        </Switch>
      ) : (
        <img src={pokeload} alt="Pikachu Pokeball" />
      )}
    </div>
  );
};

export default withRouter(App);
