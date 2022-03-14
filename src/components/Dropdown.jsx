import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ sublist }) {
    const submenu = sublist.map(subitem => (
        <li key={subitem.subname}>
            <Link to={subitem.path}>{subitem.subname}</Link>
        </li>
    ));
    return (
        <ul>
            {submenu}
        </ul>
    );
};

export default Dropdown;