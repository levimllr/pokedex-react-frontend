import React, { useState, useEffect } from 'react';
import './App.css';
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

  return (
    <div className="App">
      < CardGrid  allPokemon={allPokemon} />
    </div>
  );
}

export default App;
