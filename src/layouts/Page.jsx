import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AccountingPage from '../pages/AccountingPage';
import HomePage from '../pages/HomePage';
import ManagementPage from '../pages/ManagementPage';
import TechnicalSupportPage from '../pages/TechnicalSupportPage';

import '../styles/Section.scss';

function Page() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/zarzadzanie-i-administrowanie-nieruchomosciami" element={<ManagementPage />} />
            <Route path="/obsluga-techniczna" element={<TechnicalSupportPage />} />
            <Route path="/obsluga-ksiegowo-bankowa" element={<AccountingPage />} />
        </Routes>
    );
};

export default Page;