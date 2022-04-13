import React from 'react';
import certyfikatMK from '../images/certyfikat-Maria.jpg';
import certyfikatAK from '../images/certyfikat-Adam.jpg';


function CertificatesPage() {


    const handleOnClick = (e) => {
        const imgBox = document.getElementById('img-box');
        const bigImg = document.getElementById('big-img');
        imgBox.style.display = 'flex';
        bigImg.src = e.target.src;
        bigImg.alt = e.target.alt;
    }

    const handleClose = () => {
        const imgBox = document.getElementById('img-box');
        imgBox.style.display = "none";
    }

    return (
        <>
            <div className='content-box'>
                <h3 className="page-list-title">Nasze uprawnienia</h3>
                <div id='certificates-section'>
                    <img className='cert-img' src={certyfikatMK} alt="Certyfikat Maria Kroker" onClick={handleOnClick} />
                    <img className='cert-img' src={certyfikatAK} alt="Certyfikat Adam Kroker" onClick={handleOnClick} />

                    <div id='img-box'>
                        <button className='Xbutton' onClick={handleClose}>X</button>
                        <img className='cert-img-big' id="big-img" alt='' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CertificatesPage;