import React from 'react';
import { NavLink } from 'react-router-dom';

import photo from '../images/landscape.jpg';
import Dropdown from '../components/Dropdown';

import '../styles/Navigation.scss';

const list = [
    { name: "Strona główna", path: "/" },
    {
        name: "Zarządzanie nieruchomościami", path: "/zarzadzanie-i-administrowanie-nieruchomosciami",
        sublist: [
            { subname: "Zarządzanie i administrowanie nieruchomościami", path: "zarzadzanie-i-administrowanie-nieruchomosciami" },
            { subname: "Obsługa techniczna", path: "obsluga-techniczna" },
            { subname: "Obsługa księgowo-bankowa", path: "obsluga-ksiegowo-bankowa" }
        ]
    },
    {
        name: "Wycena nieruchomości", path: "/wycena-nieruchomosci",
        sublist: [
            { subname: "Oferta", path: "oferta" },
            { subname: "Potrzebne dokumenty", path: "potrzebne-dokumenty" }
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
                    <Dropdown sublist={item.sublist} />
                </>
            ) : (
                <NavLink to={item.path}>{item.name}</NavLink>
            )}
        </li>
    ))

    return (
        <>
            <ul className="nav-list">
                {menu}
            </ul>
            <img src={photo} alt="Filharmonia" />
        </>
    );
};

export default Navigation;