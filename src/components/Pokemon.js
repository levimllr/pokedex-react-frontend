import React from "react";
import axios from "axios";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      id: "",
      imgSrc: ""
    };
  }

  render() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.state.name.toLowerCase())
      .then(result => {
        this.setState({
          id: result.data.id,
          imgSrc: result.data.sprites.front_default
        });
      });

    return (
      <div className="pokemon">
        <img alt="Pokemon Sprite" src={this.state.imgSrc}></img>
        <p>
          {this.state.name} #{this.state.id}
        </p>
      </div>
    );
  }
}

export default Pokemon;
