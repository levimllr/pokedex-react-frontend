import React from "react";
import ReactDOM from "react-dom";
import Pokemons from "./Pokemons";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Pokemons />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
