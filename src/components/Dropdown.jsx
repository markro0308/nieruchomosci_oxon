import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Dropdown({ sublist }) {

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const submenu = sublist.map(subitem => (
        <li key={subitem.subname}>
            <HashLink smooth to={`${subitem.path}${subitem.hash}`} scroll={scrollWithOffset}>{subitem.subname}</HashLink>
        </li>
    ));
    return (
        <ul>
            {submenu}
        </ul>
    );
};

export default Dropdown;