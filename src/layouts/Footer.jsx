import React from 'react';
import '../styles/Footer.scss';
import imars from '../images/IMARS.png';
import baza from '../images/Baza silesia.png';
import stowarzyszenie from '../images/PFSRM.jpg';
import sstowarzyszenie from '../images/SSRM.jpg';

function Footer() {
    return (
        <>
            <div id="footer-partners">
                <h5>Nasi partnerzy</h5>
                <div id="img-partners">
                    <img id="img-imar" src={imars} alt="IMAR SILESIA" />
                    <img id="img-baza" src={baza} alt="BAZA SILESIA" />
                    <img id="img-PLF" src={stowarzyszenie} alt="POLSKA FEDERACJA STOWARZYSZEŃ RZECZOZNAWCÓW MAJĄTKOWYCH" />
                    <img id="img-SLF" src={sstowarzyszenie} alt="ŚLĄSKIE STOWARZYSZENIE RZECZOZNAWCÓW MAJĄTKOWYCH" />
                </div>
            </div>
            <div id="footer-main">
                <p>Copyright © 2022 F.U.H. „OXON”</p>

                <div>
                    <h4>Nasze biuro</h4>
                    <div id="footer-contact">
                        <p>ul. Tadeusza Kościuszki 63/311, 41-500 Chorzów</p>
                        <p><strong>Telefon:</strong> +48 507 133 631, +48 604 958 671</p>
                        <p><strong>E-mail:</strong> oxon_sl@interia.pl</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;