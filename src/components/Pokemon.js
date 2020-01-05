import React from "react";
import axios from "axios";

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      id: "",
      imgSrc: "",
      types: []
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + this.state.name.toLowerCase())
      .then(result => {
        this.setState({
          id: result.data.id,
          imgSrc: result.data.sprites.front_default,
          types: result.data.types.map(item => item.type.name)
        });
      });
  }

  render() {
    console.log("rendering");

    return (
      <div className="pokemon">
        <div className="pokemon-img-frame">
          <img
            className="pokemon-img"
            alt="Pokemon Sprite"
            src={this.state.imgSrc}
          ></img>
        </div>
        <h3>
          {this.state.name} #{this.state.id}
        </h3>
        <ul>
          {this.state.types.map(type => (
            <li key={this.state.name + "-" + type}>{type}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Pokemon;
