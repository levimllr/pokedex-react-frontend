import React, { FunctionComponent } from 'react';
import NavButton from './NavButton';

const Nav:FunctionComponent =
    () => (
        <div className="nav">
            <NavButton name="Search" />
            <NavButton name="Random" />
            <NavButton name="Saved" />
        </div>
    )

export default Nav;