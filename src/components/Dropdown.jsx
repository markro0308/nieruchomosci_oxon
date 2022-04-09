import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Dropdown({ sublist, click }) {



    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const submenu = sublist.map(subitem => (
        <li key={subitem.subname}>
            <HashLink
                smooth to={`${subitem.path}${subitem.hash}`}
                scroll={scrollWithOffset}
                onClick={click}
            >
                {subitem.subname}
            </HashLink>
        </li>
    ));
    return (
        <ul className='sub-nav-ul'>
            {submenu}
        </ul>
    );
};

export default Dropdown;