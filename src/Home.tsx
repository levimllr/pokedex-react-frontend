import React, { useEffect, useState, FunctionComponent } from 'react';
import './App.scss';
import CardGrid from './CardGrid';
import SearchFilter from './SearchFilter';
import { PokemonAttributes, PokemonFilter } from './types/index';

interface Props {
  allPokemon: Array<PokemonAttributes>;
  isSearchVisible: boolean;
  handleUnmount: () => void;
}

const Home: FunctionComponent<Props> = ({
  allPokemon,
  isSearchVisible,
  handleUnmount,
}) => {
  const [filter, setFilter] = useState<PokemonFilter>({ name: '', types: [] });

  // ensure isSearchVisible state in App is set to false when Home unmounted
  useEffect(() => {
    return () => handleUnmount();
  }, [handleUnmount]);

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
    <div className="Home">
      {isSearchVisible && (
        <SearchFilter
          handleNameChange={nameFilter}
          handleTypeChange={typeFilter}
        />
      )}
      <CardGrid allPokemon={filterPokemon()} />
    </div>
  );
};

export default Home;
