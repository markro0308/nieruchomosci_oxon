import React from 'react';

import '../styles/Header.scss';
import logo from '../logo4.svg';

function Header() {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="contact">
                <i class="icon-mail"></i> oxon_sl@interia.pl
            </div>

            <div className="contact">
                Zarządzanie <i class="icon-phone"></i> + 48 507 133 631 <br />
                Wycena <i class="icon-phone"></i> + 48 604 958 671
            </div>
        </>
    );
};

export default Header;