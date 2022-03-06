import React from 'react';
import { NavLink } from 'react-router-dom';

import Dropdown from '../components/Dropdown';

import '../styles/Navigation.scss';

const list = [
    { name: "Strona główna", path: "/" },
    {
        name: "Zarządzanie nieruchomościami", path: "/zarzadzanie-nieruchomosciami",
        sublist: [
            { subname: "Zarządzenie i administrowanie nieruchomościami" },
            { subname: "Obsługa techniczna" },
            { subname: "Obsługa księgowo-bankowa" }
        ]
    },
    {
        name: "Wycena nieruchomości", path: "/wycena-nieruchomosci",
        sublist: [
            { subname: "Oferta" },
            { subname: "Potrzebne dokumenty" }
        ]
    },
    { name: "Kontakt", path: "/kontakt" },
    { name: "Certyfikaty", path: "/certyfikaty" },
]

function Navigation() {

    const menu = list.map(item => (
        <li key={item.name}>
            {item.sublist ? (
                <>
                    <NavLink to={item.path}>{item.name}</NavLink>
                    <Dropdown sublist={item.sublist} path={item.path} />
                </>
            ) : (
                <NavLink to={item.path}>{item.name}</NavLink>
            )}
        </li>
    ))

    return (
        <>
            <ul>
                {menu}
            </ul>
        </>
    );
};

export default Navigation;