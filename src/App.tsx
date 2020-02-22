import React, { useState, useEffect, FunctionComponent } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Nav from './Nav';
import DetailPage from './DetailPage';
import Home from './Home';
import pokeload from './pikapokeball.gif';
import { AllPokemonAPI, MetaPokemon, PokemonAttributes } from './types/index';

const App: FunctionComponent<{}> = () => {
  const [allPokemon, setAllPokemon] = useState<Array<PokemonAttributes>>([]);
  const [isSearchVisible, setIsSearchVisible] = useState<boolean>(false);

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

  const toggleSearch = () => {
    console.log(`Toggling Search component from ${isSearchVisible} to ${!isSearchVisible}!`)
    setIsSearchVisible(!isSearchVisible);
  };

  const hideSearch = () => {
    console.log("Hiding Search.")
    setIsSearchVisible(false);
  };

  return (
    <div className="App">
      <Router>
        <Nav
          numberOfPokemon={allPokemon.length}
          handleSearchClick={toggleSearch}
        />
        {allPokemon.length > 0 ? (
          <Switch>
            <Route exact path="/pokemon">
              <Home
                allPokemon={allPokemon}
                isSearchVisible={isSearchVisible}
                handleUnmount={hideSearch}
              />
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
