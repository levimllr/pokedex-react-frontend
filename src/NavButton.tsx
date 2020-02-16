import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  name: string;
  path: string;
}

const NavButton: FunctionComponent<NavButtonProps> = ({ name, path }) => (
  <Link to={path}>
    <button className="button">{name}</button>
  </Link>
);

export default NavButton;
