import React, { FunctionComponent } from 'react';
import NavButton from './NavButton';

interface Props {
    numberOfPokemon: number;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Nav: FunctionComponent<Props> = props => {
  const randomPokemonNumber = Math.floor(Math.random() * props.numberOfPokemon);

        return (
        <div className="nav">
            <NavButton name={"Search"} path={"/pokemon"} handleClick={props.handleClick} />
            <NavButton name={"Random"} path={`/pokemon/${randomPokemonNumber}`} />
            <NavButton name={"Saved"} path={"/pokemon"} />
        </div>
    )}

export default Nav;
