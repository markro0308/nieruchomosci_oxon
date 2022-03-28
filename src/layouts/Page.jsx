import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountingPage from '../pages/AccountingPage';
import ContactPage from '../pages/ContactPage';
import DocsPage from '../pages/DocsPage';
import HomePage from '../pages/HomePage';
import ManagementPage from '../pages/ManagementPage';
import OfferPage from '../pages/OfferPage';
import TechnicalSupportPage from '../pages/TechnicalSupportPage';

import '../styles/Section.scss';

function Page() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/zarzadzanie-i-administrowanie-nieruchomosciami" element={<ManagementPage />} />
            <Route path="/obsluga-techniczna" element={<TechnicalSupportPage />} />
            <Route path="/obsluga-ksiegowo-bankowa" element={<AccountingPage />} />
            <Route path="/oferta" element={<OfferPage />} />
            <Route path="/potrzebne-dokumenty" element={<DocsPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
    );
};

export default Page;