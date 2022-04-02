import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import ManagementPage from '../pages/ManagementPage';
import OfferPage from '../pages/OfferPage';
import '../styles/Section.scss';

function Page() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/zarzadzanie-i-administrowanie-nieruchomosciami" element={<ManagementPage />} />
            <Route path="/oferta" element={<OfferPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
    );
};

export default Page;