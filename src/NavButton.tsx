import React, { FunctionComponent } from 'react';

interface NavButtonProps {
    name: string
};

const NavButton:FunctionComponent<NavButtonProps> =
    ({name}) => (
        <button className="button">
            {name}
        </button>
    )

export default NavButton;