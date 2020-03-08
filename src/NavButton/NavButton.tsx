import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  name: string;
  path: string;
  cssClass: string;
}

const NavButton: FunctionComponent<NavButtonProps> = ({
  name,
  path,
  cssClass,
}) => (
  <Link to={path} className={cssClass}>
    <h3>{name}</h3>
  </Link>
);

export default NavButton;
