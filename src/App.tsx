import React, { useState, useEffect, MouseEvent } from 'react';
import './App.css';
import Nav from './Nav';
import CardGrid from './CardGrid';
import DetailPage from './DetailPage';

const App: React.FC = () => {

  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const fetchAllPokemon = () => {
    fetch('http://localhost:3001/api/v1/pokemon')
      .then(resp => resp.json())
      .then(json => setAllPokemon(json));
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const showDetails = (pokeNum: number) => {
    console.log(pokeNum);
    setCurrentPokemon(allPokemon[pokeNum]);
  };

  return (
    <div className="App">
      < Nav />
      { currentPokemon !== null ? <DetailPage pokemon={currentPokemon} /> : null }
      < CardGrid  allPokemon={allPokemon} showDetails={showDetails} />
    </div>
  );
}

export default App;
