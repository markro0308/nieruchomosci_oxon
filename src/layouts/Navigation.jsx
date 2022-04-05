import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import photo from '../images/slajder4.jpg';
import Dropdown from '../components/Dropdown';

import '../styles/Navigation.scss';
import Slideshow from '../components/Slideshow';

const list = [
    { name: "Strona główna", path: "/" },
    {
        name: "Zarządzanie nieruchomościami", path: "/zarzadzanie-i-administrowanie-nieruchomosciami", hash: "#",
        sublist: [
            { subname: "Zarządzanie i administrowanie nieruchomościami", path: "/zarzadzanie-i-administrowanie-nieruchomosciami", hash: "#management-section" },
            { subname: "Obsługa techniczna", path: "/zarzadzanie-i-administrowanie-nieruchomosciami", hash: "#technical-support-section" },
            { subname: "Obsługa księgowo-bankowa", path: "/zarzadzanie-i-administrowanie-nieruchomosciami", hash: "#accounting-section" }
        ]
    },
    {
        name: "Wycena nieruchomości", path: "/oferta", hash: "#",
        sublist: [
            { subname: "Oferta", path: "/oferta", hash: "#offer-section" },
            { subname: "Potrzebne dokumenty", path: "/oferta", hash: "#docs-section" }
        ]
    },
    { name: "Kontakt", path: "/kontakt" },
    { name: "Certyfikaty", path: "/certyfikaty" },
]

function Navigation() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        const Hheight = window.screen.width * 0.07;
        if (offset >= Hheight) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    const menu = list.map(item => item.sublist ? (
        <li key={item.name} className='nav-list-parent'>
            <HashLink smooth to={`${item.path}${item.hash}`}>{item.name}</HashLink>
            <Dropdown sublist={item.sublist} />
        </li>
    ) : (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    )
    )

    return (
        <>
            <ul className={scrolled ? 'nav-list sticky' : 'nav-list'}>
                {menu}
            </ul>
            {/* <img src={photo} alt="Filharmonia" /> */}
            <Slideshow />
        </>
    );
};

export default Navigation;