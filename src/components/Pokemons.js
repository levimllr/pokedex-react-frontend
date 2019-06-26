import React from "react";
// import pokeapi from "../utils/pokeapi";
import axios from "axios";
// import useDropdown from "./useDropdown";

function requestPokemon(type) {
  let requestURL = "https://pokeapi.co/api/v2/" + type;
  axios.get(requestURL).then(result => console.log(result.data.pokemon));
}

class Pokemons extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div className="pokemons"></div>;
  }
}

export default Pokemons;
