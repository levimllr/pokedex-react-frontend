import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import pokedex from '../assets/pokedex.png';
import NavButton from '../NavButton/NavButton';
import './Nav.scss';

interface Props {
  numberOfPokemon: number;
}

const Nav: FunctionComponent<Props> = props => {
  const randomPokemonNumber = Math.floor(Math.random() * props.numberOfPokemon);

  return (
    <header>
      <div className={'nav-logo'}>
        <Link to={'/'}>
          <img src={pokedex} alt="Pokedex" className="nav-logo-image"></img>
          <h2>Pokédex</h2>
        </Link>
      </div>
      <nav>
        <NavButton name={'Search'} path={'/search'} cssClass={'nav-link'} />
        <NavButton
          name={'Random'}
          path={`/pokemon/${randomPokemonNumber}`}
          cssClass={'nav-link'}
        />
        <NavButton name={'Saved'} path={'/'} cssClass={'nav-link'} />
      </nav>
    </header>
  );
};

export default Nav;
