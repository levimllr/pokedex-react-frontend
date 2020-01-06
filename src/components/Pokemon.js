import React from 'react';

class Pokemon extends React.Component {

    render() {
        return (
            <div className="pokemon-card">
                <img src={this.props.pokemon.image_url}></img>
                <h3>#{this.props.pokemon.id} {this.props.pokemon.name}</h3>
                <p>{this.props.pokemon.flavor_text}</p>
                <ul>
                    <li>Height: {this.props.pokemon.height}</li>
                    <li>Weight: {this.props.pokemon.weight}</li>
                </ul>
            </div>
        )
    };
};

export default Pokemon;
