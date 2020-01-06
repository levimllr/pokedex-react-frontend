import React from "react";
import Pokemons from "./containers/Pokemons";

const pokeDomain = 'http://localhost:3001/api/v1';

class App extends React.Component {
  state = {
    pokemons: []
  };

  componentDidMount() {
    this.fetchAllPokemon();
  };

  fetchAllPokemon() {
    const allPokemonResource = `${pokeDomain}/pokemon`;
    fetch(allPokemonResource)
      .then(response => response.json())
      .then(json => this.setState({pokemons: json}))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div className="container">
        <Pokemons allPokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
