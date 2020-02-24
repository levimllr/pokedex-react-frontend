import React, { FunctionComponent } from 'react';
import NavButton from './NavButton';

interface Props {
  numberOfPokemon: number;
}

const Nav: FunctionComponent<Props> = props => {
  const randomPokemonNumber = Math.floor(Math.random() * props.numberOfPokemon);

  return (
    <div className="nav">
      <NavButton name={'Search'} path={'/search'} />
      <NavButton name={'Random'} path={`/pokemon/${randomPokemonNumber}`} />
      <NavButton name={'Saved'} path={'/'} />
    </div>
  );
};

export default Nav;
