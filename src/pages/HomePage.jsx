import React from 'react';
import photo from '../images/landscape.jpg';

import '../styles/Section.scss';

function HomePage() {
    return (
        <>
            <img src={photo} alt="Filharmonia" />
            <p>Jesteśmy firmą rodzinną, która nieprzerwanie od kilkunastu lat zajmuje się zarządzaniem i wyceną nieruchomości, uprawnienia zawodowe do wyceny nieruchomości oraz państwową licencję do zarządzania nieruchomościami uzyskaliśmy w 2001 roku. Od tego czasu w warunkach wolnego rynku świadczymy usługi w zakresie zarządzania, administrowania i wyceny nieruchomości. Jako zespół potrafimy sprostać rozwiązywaniu zagadnień z pogranicza zarządzania i oceny wzrostu lub utraty wartości nieruchomości, z którymi borykają się wspólnoty mieszkaniowe i indywidualni właściciele nieruchomości. Naszymi klientami są osoby indywidualne, wspólnoty mieszkaniowe, firmy, spółki i instytucje państwowe.</p>

            <p>Jesteśmy członkiem Śląskiego Stowarzyszenia Rzeczoznawców Majątkowych będącego członkiem Polskiej Federacji Stowarzyszeń Rzeczoznawców Majątkowych oraz Instytutu Monitoringu i Analiz Rynku Nieruchomości Silesia.</p>
        </>
    );
};

export default HomePage;