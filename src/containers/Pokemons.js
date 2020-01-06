import React from 'react';
import Pokemon from '../components/Pokemon';

class Pokemons extends React.Component {

    render() {
        return (
            <div>
                <h1>Pokemons</h1>
                {this.props.allPokemons.map((pokemon) => {
                        return <Pokemon pokemon={pokemon} />
                })}
            </div>
        )
    };
};

export default Pokemons;
