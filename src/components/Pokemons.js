import React from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

// function arrowOffset(props) {

//   return ()
// }

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      offset: 0,
      limit: 20
    };
  }

  getPokemonList() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
      .then(result => {
        this.setState({
          pokemons: result.data.results.map(item => item.name)
        });
      });
  }

  componentDidMount() {
    this.getPokemonList();
  }

  render() {
    console.log("rendering pokemons");

    return this.state.pokemons.map(pokemonName => (
      <Pokemon key={pokemonName} name={pokemonName} />
    ));
  }
}

export default Pokemons;
