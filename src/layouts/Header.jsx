import React from 'react';

import '../styles/Header.scss';
import logo from '../logo_nv.svg';

function Header() {
    return (
        <>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="contact">
                <p><i class="icon-mail"></i> oxon_sl@interia.pl</p>
            </div>

            <div className="contact">
                <p>Zarządzanie <i class="icon-phone"></i> + 48 507 133 631</p>
                <p>Wycena <i class="icon-phone"></i> + 48 604 958 671</p>
            </div>
        </>
    );
};

export default Header;