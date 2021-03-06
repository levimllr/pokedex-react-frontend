import React, { useState, useEffect, FunctionComponent } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Nav from '../Nav/Nav';
import DetailPage from '../DetailPage/DetailPage';
import Search from '../Search/Search';
import pokeload from '../assets/pikapokeball.gif';
import { AllPokemonAPI, MetaPokemon, PokemonAttributes } from '../types/index';

const App: FunctionComponent<{}> = () => {
  const [allPokemon, setAllPokemon] = useState<Array<PokemonAttributes>>([]);

  useEffect(() => {
    const fetchAllPokemon = () => {
      fetch('http://localhost:3001/api/v1/pokemon')
        .then(resp => resp.json())
        .then(json => formatAllPokemonResponse(json));
    };
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
      <Router>
        <Nav numberOfPokemon={allPokemon.length} />
        {allPokemon.length > 0 ? (
          <Switch>
            <Route exact path="/search">
              <Search allPokemon={allPokemon} />
            </Route>
            <Route path="/pokemon/:id">
              <DetailPage allPokemon={allPokemon} />
            </Route>
          </Switch>
        ) : (
          <img src={pokeload} alt="Pikachu Pokeball" />
        )}
      </Router>
    </div>
  );
};

export default App;
