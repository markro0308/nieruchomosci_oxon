import React from 'react';

function OfferPage() {
    return (
        <>
            <h3 className="page-list-title">Oferta</h3>
            <p>Świadczymy profesjonalne usługi z zakresu wyceny nieruchomości, praw związanych z nieruchomościami oraz szeroko rozumianego doradztwa związanego z rynkiem nieruchomości. Dbamy aby nasze opracowania sporządzane były zgodnie z obowiązującymi przepisami prawa i standardami zawodowymi rzeczoznawców majątkowych. W tym celu bierzemy udział w szkoleniach i dodatkowych kursach, stale rozwijając swój warsztat pracy. Do powierzanych nam zadań podchodzimy odpowiedzialnie, rzetelnie, z najwyższą starannością i poszanowaniem zasad etyki zawodowej.</p>
            <p>Świadczymy usługi z zakresu wyceny:</p>
            <ul className='page-list'>
                <li><strong>nieruchomości gruntowe niezabudowane</strong> (pod zabudowę, rolne, leśne, rekreacyjne),</li>
                <li><strong>nieruchomości lokalowe</strong> (lokale mieszkalne, usługowe, handlowe, garaże),</li>
                <li><strong>nieruchomości gruntowe zabudowane o funkcji mieszkaniowej</strong> (budynki mieszkalne jednorodzinne oraz wielorodzinne),</li>
                <li><strong>nieruchomości gruntowe zabudowane o funkcji komercyjnej</strong> (przemysłowe, magazynowe, biurowe, handlowe, hotelowe, stacje paliw, szpitale i inne).</li>
            </ul>
            <p>Przygotowujemy operaty określające wartości <strong>ograniczonych praw rzeczowych</strong> (ustanowionych lub planowanych do ustanowienia) np.:</p>
            <ul className='page-list'>
                <strong>
                    <li>spółdzielcze własnościowe prawo do lokalu mieszkalnego,</li>
                    <li>służebność przesyłu,</li>
                    <li>służebność gruntowa (w tym służebności drogi koniecznej),</li>
                    <li>służebność osobista.</li>
                </strong>
            </ul>
            <p>Przygotowujemy operaty szacunkowe dla różnych celów, w tym:</p>
            <ul className='page-list'>
                <li>zabezpieczenia wierzytelności kredytodawcy (kredytu hipotecznego) lub pożyczki,</li>
                <li>sporządzania sprawozdań finansowych firm,</li>
                <li>amortyzacji środków trwałych,</li>
                <li>wnoszeniu wkładów niepieniężnych (aportu) do spółek,</li>
                <li>sprzedaży lub zakupu nieruchomości (zamiana, negocjacja ceny),</li>
                <li>podziału majątku,</li>
                <li>ustaleniu wartości poniesionych nakładów,</li>
                <li>ustaleniu odszkodowań,</li>
                <li>ustalenia wartości służebności: przejazdu i przechodu, przesyłu oraz służebności osobistych,</li>
                <li>ustalenia wysokości podatku od spadków i darowizn.</li>
            </ul>
            <p><strong>Dodatkowo, rzeczoznawca podejmuje się przygotowania:</strong></p>
            <ul className='page-list'>
                <li>analizy rynku nieruchomości,</li>
                <li>analizy opłacalności inwestycji.</li>
            </ul>
        </>
    );
};

export default OfferPage;