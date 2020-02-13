import React, { useState, useEffect, FunctionComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import './App.css';
import Nav from './Nav';
import CardGrid from './CardGrid';
import DetailPage from './DetailPage';
import pokeload from './pikapokeball.gif';
import SearchFilter from './SearchFilter';
import { AllPokemonAPI, MetaPokemon, PokemonAttributes } from './types/index';

const App:FunctionComponent<RouteComponentProps> = () => {

  const [allPokemon, setAllPokemon] = useState<Array<PokemonAttributes>>([]);
  const [search, setSearch] = useState<boolean>(false);
  // const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const fetchAllPokemon = () => {
    fetch('http://localhost:3001/api/v1/pokemon')
      .then(resp => resp.json())
      .then(json => formatAllPokemonResponse(json));
  };

  const formatAllPokemonResponse = (json:AllPokemonAPI) => {
    let parsedData = json.data.map((pokemon:MetaPokemon) => pokemon.attributes);
    setAllPokemon(parsedData);
  };

  const toggleSearch = () => {
    setSearch(!search);
  };

  const renderSearch = () => {
   if (search) {
     return <SearchFilter handleChange={searchFilter} />
   } else {
     return null;
   };
  };

  const searchFilter = (event: React.FormEvent<HTMLFormElement>) => {
    // help here!
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <Nav numberOfPokemon={allPokemon.length}  handleClick={toggleSearch} />
      { allPokemon.length > 0 ?
        <Switch>
          <Route exact path="/pokemon">
            {renderSearch()}
            <CardGrid  allPokemon={allPokemon} />
          </Route>
          <Route path="/pokemon/:id">
            <DetailPage allPokemon={allPokemon} />
          </Route>
        </Switch> :
        <img src={pokeload} alt="Pikachu Pokeball"></img>
      }
    </div>
  );
}

export default withRouter(App);
