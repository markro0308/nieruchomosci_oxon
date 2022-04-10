import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

import Dropdown from '../components/Dropdown';

import '../styles/Navigation.scss';
import Slideshow from '../components/Slideshow';

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

    const [scrolled, setScrolled] = useState(false);
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
        <li key={item.name} className='nav-list-parent' onClick={handleShowSublist}>
            <HashLink smooth to={buttonClicked ? "#;" : `${item.path}${item.hash}`}>{item.name}</HashLink>
            <Dropdown sublist={item.sublist} click={buttonClicked ? handleClickOnMenuList : handleClick} />
        </li>
    ) : (
        <li key={item.name}>
            <HashLink smooth to={`${item.path}${item.hash}`} onClick={buttonClicked ? handleClickOnMenuList : null}>{item.name}</HashLink>
        </li>
    )
    )

    return (
        <>
            <div className={scrolled ? 'nav-list sticky' : 'nav-list'}>
                <button className='icon' onClick={handleShowMenu}><i class="icon-menu"></i></button>
                <ul className='main-nav-ul'>
                    {menu}
                </ul>
            </div>
            <Slideshow />
        </>
    );
};

export default Navigation;