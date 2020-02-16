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
  const [filter, setFilter] = useState<PokemonFilter | null>(null);

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const fetchAllPokemon = () => {
    fetch('http://localhost:3001/api/v1/pokemon')
      .then(resp => resp.json())
      .then(json => formatAllPokemonResponse(json));
  };

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

  const renderSearch = () => {
    if (search) {
      return <SearchFilter handleChange={searchFilter} />;
    } else {
      return null;
    }
  };

  const checkedTypes = () => {
    // const typeCheckboxes = Array.prototype.slice.call(document.getElementsByClassName('checkbox-type'));
    // let typesChecked = typeCheckboxes
    //   .filter(box => box.checked)
    //   .map(box => box.value);
    // return typesChecked;
  };

  const searchFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    // let searchName = document.getElementById("name").value;
    // setFilter({name: searchName, types: checkedTypes() });
  };

  const filterPokemon = () => {
    if (filter) {
      return allPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(filter.name)
      );
    } else {
      return allPokemon;
    }
  };

  return (
    <div className="App">
      <Router>
        <Nav numberOfPokemon={allPokemon.length} handleClick={toggleSearch} />
        {allPokemon.length > 0 ? (
          <Switch>
            <Route exact path="/pokemon">
              {renderSearch()}
              <CardGrid allPokemon={filterPokemon()} />
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
