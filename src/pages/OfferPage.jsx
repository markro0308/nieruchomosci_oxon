import React from 'react';

function OfferPage() {
    return (
        <>
            <div className='content-box'>
                <div id="offer-section">
                    <h3 className="page-list-title">Oferta</h3>
                    <p>Świadczymy profesjonalne usługi z zakresu wyceny nieruchomości, praw związanych z nieruchomościami oraz szeroko rozumianego doradztwa związanego z rynkiem nieruchomości. Dbamy aby nasze opracowania sporządzane były zgodnie z obowiązującymi przepisami prawa i standardami zawodowymi rzeczoznawców majątkowych. W tym celu bierzemy udział w szkoleniach i dodatkowych kursach, stale rozwijając swój warsztat pracy. Do powierzanych nam zadań podchodzimy odpowiedzialnie, rzetelnie, z najwyższą starannością i poszanowaniem zasad etyki zawodowej.</p>
                    <p className="page-list-subtitle">Świadczymy usługi z zakresu wyceny:</p>
                    <ul className='page-list'>
                        <li><strong>nieruchomości gruntowe niezabudowane</strong> (pod zabudowę, rolne, leśne, rekreacyjne),</li>
                        <li><strong>nieruchomości lokalowe</strong> (lokale mieszkalne, usługowe, handlowe, garaże),</li>
                        <li><strong>nieruchomości gruntowe zabudowane o funkcji mieszkaniowej</strong> (budynki mieszkalne jednorodzinne oraz wielorodzinne),</li>
                        <li><strong>nieruchomości gruntowe zabudowane o funkcji komercyjnej</strong> (przemysłowe, magazynowe, biurowe, handlowe, hotelowe, stacje paliw, szpitale i inne).</li>
                    </ul>
                    <p className="page-list-subtitle">Przygotowujemy operaty określające wartości <strong>ograniczonych praw rzeczowych</strong> (ustanowionych lub planowanych do ustanowienia) np.:</p>
                    <ul className='page-list'>
                        <strong>
                            <li>spółdzielcze własnościowe prawo do lokalu mieszkalnego,</li>
                            <li>służebność przesyłu,</li>
                            <li>służebność gruntowa (w tym służebności drogi koniecznej),</li>
                            <li>służebność osobista.</li>
                        </strong>
                    </ul>
                    <p className="page-list-subtitle">Przygotowujemy operaty szacunkowe dla różnych celów, w tym:</p>
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
                    <p className="page-list-subtitle"><strong>Dodatkowo, rzeczoznawca podejmuje się przygotowania:</strong></p>
                    <ul className='page-list'>
                        <li>analizy rynku nieruchomości,</li>
                        <li>analizy opłacalności inwestycji.</li>
                    </ul>
                </div>
            </div>
            <div id="image-offer-section"></div>
            <div className='content-box'>

                <div id="docs-section">
                    <h3 className="page-list-title">Potrzebne dokumenty</h3>
                    <div id="docs-row-list">
                        <div>
                            <p className="page-list-subtitle"><strong>Nieruchomość lokalowa:</strong></p>
                            <ul className='page-list'>
                                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                                <li>akt notarialny nabycia nieruchomości lub umowa przedwstępna sprzedaży lokalu.</li>
                            </ul>
                            <p className="page-list-subtitle"><strong>Spółdzielcze własnościowe prawo do lokalu:</strong></p>
                            <ul className='page-list'>
                                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                                <li>w przypadku braku księgi wieczystej zaświadczenie wydane przez Spółdzielnię Mieszkaniową zawierające dane dotyczące lokalu,</li>
                                <li>umowa przedwstępna sprzedaży lokalu.</li>
                            </ul>
                            <p className="page-list-subtitle"><strong>Lokal mieszkalny / usługowy nabywany od dewelopera (w trakcie budowie):</strong></p>
                            <ul className='page-list'>
                                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                                <li>wypis z rejestru gruntów,</li>
                                <li>kopia mapy ewidencyjnej,</li>
                                <li>decyzja zatwierdzająca projekt budowlany i udzielająca pozwolenia na budowę lub decyzja o pozwoleniu na użytkowanie,</li>
                                <li>umowa przedwstępna sprzedaży lokalu (umowa deweloperska lub umowa rezerwacyjna),</li>
                                <li>rzut lokalu.</li>
                            </ul>
                            <p className="page-list-subtitle"><strong>Nieruchomość gruntowa niezabudowana:</strong></p>
                            <ul className='page-list'>
                                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                                <li>wypis z rejestru gruntów,</li>
                                <li>kopia mapy zasadniczej (S+E+U) lub mapy ewidencyjne i sytuacyjno – wysokościowej,</li>
                                <li>zaświadczenie o przeznaczeniu działki w miejscowym planie zagospodarowania przestrzennego / studium uwarunkowań i kierunków zagospodarowania przestrzennego lub decyzja o warunkach zabudowy,</li>
                                <li>decyzja zatwierdzająca projekt budowlany i udzielająca pozwolenia na budowę (jeśli została wydana),</li>
                                <li>umowa przedwstępna sprzedaży nieruchomości.</li>
                            </ul>
                        </div>
                        <div>
                            <p className="page-list-subtitle"><strong>Nieruchomość gruntowa zabudowana budynkiem mieszkalnym jednorodzinnym:</strong></p>
                            <ul className='page-list'>
                                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                                <li>wypis z rejestru gruntów,</li>
                                <li>kopia mapy zasadniczej (S+E+U) lub mapy ewidencyjnej,</li>
                                <li>zaświadczenie o przeznaczeniu działki w miejscowym planie zagospodarowania przestrzennego / studium uwarunkowań i kierunków zagospodarowania przestrzennego lub decyzja o warunkach zabudowy,</li>
                                <li>decyzja zatwierdzająca projekt budowlany i udzielająca pozwolenia na budowę lub decyzja o pozwoleniu na użytkowanie,</li>
                                <li>projekt architektoniczno – budowlany lub inwentaryzacja budynku,</li>
                                <li>dziennik budowy jeżeli inwestycja nie jest zakończona,</li>
                                <li>umowa przedwstępna sprzedaży.</li>
                            </ul>
                            <p className="page-list-subtitle"><strong>Nieruchomości komercyjne, usługowe:</strong></p>
                            <ul className='page-list'>
                                <li>numer księgi wieczystej lub odpis z księgi wieczystej nie starszy niż 3 miesiące,</li>
                                <li>wypis z rejestru gruntów (nie dotyczy nieruchomości lokalowych),</li>
                                <li>kopia mapy zasadniczej (S+E+U) lub mapy ewidencyjnej (nie dotyczy nieruchomości lokalowych),</li>
                                <li>zaświadczenie o przeznaczeniu działki w miejscowym planie zagospodarowania przestrzennego lub decyzja o warunkach zabudowy,</li>
                                <li>decyzja zatwierdzająca projekt budowlany i udzielający pozwolenia na budowę lub decyzja o pozwoleniu na użytkowanie obiektu,</li>
                                <li>projekt architektoniczno – budowlany lub inwentaryzacja budynku lub rzut lokalu,</li>
                                <li>dziennik budowy jeżeli inwestycja nie jest zakończona (nie dotyczy nieruchomości lokalowych),</li>
                                <li>informację o wysokości podatku od nieruchomości,</li>
                                <li>informacje o wysokości opłaty za użytkowanie wieczyste gruntu (jeśli dotyczy),</li>
                                <li>informację o wysokości kosztów zarządu, ochrony budynku, opłat za ubezpieczenie budynku,</li>
                                <li>informację na temat wynajętej powierzchni (wysokość stawek najmu, rodzaj zawartej umowy najmu itp).</li>
                            </ul>
                        </div>
                    </div>
                    <p className="page-list-subtitle">Warto wiedzieć, że:</p>
                    <ul className='page-list-circle'>
                        <li>operat szacunkowy może być wykorzystywany wyłącznie dla celu, dla którego został sporządzony, a zatem operatu sporządzonego np. dla celu sprzedaży nie będziecie Państwo mogli wykorzystać dla potrzeb zabezpieczenia kredytu w banku,</li>
                        <li>operat szacunkowy jest ważny maksymalnie przez okres 12 miesięcy od daty jego sporządzenia – po upływie 12 miesięcy może być wykorzystywany wyłącznie po potwierdzeniu jego aktualności przez rzeczoznawcę majątkowego – autora operatu.</li>
                    </ul>
                </div>
            </div>
        </>

    );
};

export default OfferPage;