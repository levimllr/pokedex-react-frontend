import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps {
    name: string;
    path: string;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const NavButton:FunctionComponent<NavButtonProps> =
    ({name, path, handleClick}) => (
        <Link to={path} >
            <button className="button" onClick={handleClick}>
                {name}
            </button>
        </Link>
    )

export default NavButton;