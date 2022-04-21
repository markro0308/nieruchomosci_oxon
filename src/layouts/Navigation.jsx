import React, { useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';

import Dropdown from '../components/Dropdown';

import '../styles/Navigation.scss';


const list = [
    { name: "Strona główna", path: "/", hash: "#" },
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
    { name: "Kontakt", path: "/kontakt", hash: "#" },
    { name: "Certyfikaty", path: "/certyfikaty", hash: "#" },
]

function Navigation() {

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleShowMenu = () => {
        const x = document.getElementsByClassName('main-nav-ul')[0];
        x.classList.toggle('menu-active');
        setButtonClicked(!buttonClicked);

        const y = document.getElementsByClassName('sub-nav-ul');
        for (var i = 0; i < y.length; i++) {
            if (y[i].classList.contains('submenu-active')) {
                y[i].classList.remove('submenu-active');
            };
        };

    }

    const handleShowSublist = (e) => {
        e.stopPropagation();
        const x = e.target.nextSibling;
        x.classList.toggle('submenu-active');
    }

    const handleClick = (e) => {
        e.stopPropagation();
    }

    const handleClickOnMenuList = (e) => {
        e.stopPropagation();
        handleShowMenu();
    }


    const menu = list.map(item => item.sublist ? (
        <li key={item.name} className='nav-list-parent' onClick={buttonClicked ? handleShowSublist : null}>
            <NavHashLink smooth to={`${item.path}${item.hash}`} onClick={buttonClicked ? ((e) => e.preventDefault()) : null}>{item.name}</NavHashLink>
            <Dropdown sublist={item.sublist} click={buttonClicked ? handleClickOnMenuList : handleClick} />
        </li>
    ) : (
        <li key={item.name}>
            <NavHashLink smooth to={`${item.path}${item.hash}`} onClick={buttonClicked ? handleClickOnMenuList : null}>{item.name}</NavHashLink>
        </li>
    )
    )

    return (
        <div className='nav-list'>
            <button className='icon' onClick={handleShowMenu}><i class="icon-menu"></i></button>
            <ul className='main-nav-ul'>
                {menu}
            </ul>
        </div>
    );
};

export default Navigation;