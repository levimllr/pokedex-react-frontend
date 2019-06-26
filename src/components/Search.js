import React from "react";
// import pokeapi from "../utils/pokeapi";
import axios from "axios";
// import useDropdown from "./useDropdown";

function PokemonGrid(props) {
  console.log("Creating Pokemon grid!");
  console.log(props.pokemons);

  if (props.type === "type/19" || props.type === "type/20") {
    return <h3>These Pokemon are yet to be discovered...</h3>;
  }

  return (
    <ul className="pokemon-list">
      {props.pokemons.map(pokemon => {
        return (
          <li key={pokemon.name} className={pokemon}>
            {pokemon.name}
          </li>
        );
      })}
    </ul>
  );
}

class SearchParams extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      types: ["all"],
      selectedType: "type/0",
      pokemons: []
    };
  }

  componentDidMount() {
    console.log("Component did mount!");

    axios.get("https://pokeapi.co/api/v2/type/").then(result => {
      const types = this.state.types.concat(
        result.data.results.map(result => result.name)
      );
      this.setState({ types });
    });

    this.requestPokemon(this.state.selectedType);
  }

  requestPokemon(type) {
    console.log("Requesting Pokemon!");

    if (type === "type/0") {
      let requestURL = "https://pokeapi.co/api/v2/pokemon";
      axios.get(requestURL).then(result => {
        this.setState({ pokemons: result.data.results });
      });
    } else {
      let requestURL = "https://pokeapi.co/api/v2/" + type;
      axios.get(requestURL).then(result => {
        this.setState({
          pokemons: result.data.pokemon.map(pokemon => pokemon.pokemon)
        });
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.requestPokemon(this.state.selectedType);
          }}
        >
          <label htmlFor="type">Types</label>
          <select
            onChange={event =>
              this.setState({ selectedType: event.target.value })
            }
            onBlur={event =>
              this.setState({ selectedType: event.target.value })
            }
          >
            {this.state.types.map((type, index) => (
              <option key={type} value={`type/${index}`}>
                {type}
              </option>
            ))}
          </select>
          <button>I chose you!</button>
        </form>
        <PokemonGrid
          pokemons={this.state.pokemons}
          type={this.state.selectedType}
        />
      </div>
    );
  }
}

export default SearchParams;
