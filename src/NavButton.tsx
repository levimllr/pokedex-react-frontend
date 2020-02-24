import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
  name: string;
  path: string;
  handleSearchClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavButton: FunctionComponent<NavButtonProps> = ({
  name,
  path,
  handleSearchClick,
}) => (
  <Link to={path} onClick={handleSearchClick}>
    {name}
  </Link>
);

export default NavButton;
