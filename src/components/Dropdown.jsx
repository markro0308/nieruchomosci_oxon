import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ sublist, path }) {
    const submenu = sublist.map(subitem => (
        <li key={subitem.subname}>
            <Link to={path}>{subitem.subname}</Link>
        </li>
    ));
    return (
        <ul>
            {submenu}
        </ul>
    );
};

export default Dropdown;