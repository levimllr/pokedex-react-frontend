import React, { useState, useEffect, MouseEvent, FunctionComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import './App.css';
import Nav from './Nav';
import CardGrid from './CardGrid';
import DetailPage from './DetailPage';
import {Pokemon} from './types/index'

const App:FunctionComponent<RouteComponentProps> = () => {

  const [allPokemon, setAllPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);

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
      <Nav/>
      <Switch>
        <Route exact path="/pokemon">
          <CardGrid  allPokemon={allPokemon} />
        </Route>
        <Route path="/pokemon/:id">
          <DetailPage allPokemon={allPokemon} />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
