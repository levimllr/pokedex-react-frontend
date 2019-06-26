import React from "react";
import ReactDOM from "react-dom";
import Pokemon from "./Pokemon";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Pokemon name="Mewtwo" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
