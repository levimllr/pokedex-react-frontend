import React, { useState, useEffect, MouseEvent } from 'react';
import './App.css';
import Nav from './Nav';
import CardGrid from './CardGrid';

const App: React.FC = () => {

  const [allPokemon, setAllPokemon] = useState([]);

  const fetchAllPokemon = () => {
    fetch('http://localhost:3001/api/v1/pokemon')
      .then(resp => resp.json())
      .then(json => setAllPokemon(json));
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const showDetails = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    console.log(event.target);
  };

  return (
    <div className="App">
      < Nav />
      < CardGrid  allPokemon={allPokemon} showDetails={showDetails} />
    </div>
  );
}

export default App;
