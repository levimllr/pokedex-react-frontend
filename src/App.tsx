import React, { useState, useEffect, FunctionComponent } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Nav from './Nav';
import CardGrid from './CardGrid';
import DetailPage from './DetailPage';
import pokeload from './pikapokeball.gif';
import SearchFilter from './SearchFilter';
import {
  AllPokemonAPI,
  MetaPokemon,
  PokemonAttributes,
  PokemonFilter,
} from './types/index';

const App: FunctionComponent<{}> = () => {
  const [allPokemon, setAllPokemon] = useState<Array<PokemonAttributes>>([]);
  const [search, setSearch] = useState<boolean>(false);
  const [filter, setFilter] = useState<PokemonFilter>({ name: '', types: [] });

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
    setSearch(!search);
  };

  const hideSearch = () => {
    setFilter({ name: '', types: [] });
    setSearch(false);
  };

  const renderSearch = () => {
    if (search) {
      return (
        <SearchFilter
          handleNameChange={nameFilter}
          handleTypeChange={typeFilter}
        />
      );
    } else {
      return null;
    }
  };

  const nameFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, name: event.target.value.toLowerCase() });
  };

  const typeFilter = (selectedType: any) => {
    let types = [];
    if (selectedType) {
      types = selectedType.map((type: any) => type.value);
    }
    setFilter({ ...filter, types: types });
  };

  const filterPokemon = () => {
    let filteredPokemon = allPokemon;
    if (filter) {
      if (filter.name) {
        filteredPokemon = filteredPokemon.filter(pokemon =>
          pokemon.name.toLowerCase().includes(filter.name)
        );
      }

      if (filter.types.length > 0) {
        filteredPokemon = filteredPokemon.filter(pokemon => {
          for (let i = 0; i < pokemon.types.length; i++) {
            if (filter.types.includes(pokemon.types[i].type.name)) {
              return true;
            }
          }
          return false;
        });
      }
    }
    return filteredPokemon;
  };

  return (
    <div className="App">
      <Router>
        <Nav numberOfPokemon={allPokemon.length} handleClick={toggleSearch} />
        {allPokemon.length > 0 ? (
          <Switch>
            <Route exact path="/pokemon">
              {renderSearch()}
              <CardGrid
                allPokemon={filterPokemon()}
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
