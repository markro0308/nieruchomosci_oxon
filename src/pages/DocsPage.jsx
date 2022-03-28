import React from 'react';

function DocsPage() {
    return (
        <>
            <h3 className="page-list-title">Potrzebne dokumenty</h3>
            <p><strong>Nieruchomość lokalowa:</strong></p>
            <ul className='page-list'>
                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                <li>akt notarialny nabycia nieruchomości lub umowa przedwstępna sprzedaży lokalu.</li>
            </ul>
            <p><strong>Spółdzielcze własnościowe prawo do lokalu:</strong></p>
            <ul className='page-list'>
                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                <li>w przypadku braku księgi wieczystej zaświadczenie wydane przez Spółdzielnię Mieszkaniową zawierające dane dotyczące lokalu,</li>
                <li>umowa przedwstępna sprzedaży lokalu.</li>
            </ul>
            <p><strong>Lokal mieszkalny / usługowy nabywany od dewelopera (w trakcie budowie):</strong></p>
            <ul className='page-list'>
                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                <li>wypis z rejestru gruntów,</li>
                <li>kopia mapy ewidencyjnej,</li>
                <li>decyzja zatwierdzająca projekt budowlany i udzielająca pozwolenia na budowę lub decyzja o pozwoleniu na użytkowanie,</li>
                <li>umowa przedwstępna sprzedaży lokalu (umowa deweloperska lub umowa rezerwacyjna),</li>
                <li>rzut lokalu.</li>
            </ul>
            <p><strong>Nieruchomość gruntowa niezabudowana:</strong></p>
            <ul className='page-list'>
                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                <li>wypis z rejestru gruntów,</li>
                <li>kopia mapy zasadniczej (S+E+U) lub mapy ewidencyjne i sytuacyjno – wysokościowej,</li>
                <li>zaświadczenie o przeznaczeniu działki w miejscowym planie zagospodarowania przestrzennego / studium uwarunkowań i kierunków zagospodarowania przestrzennego lub decyzja o warunkach zabudowy,</li>
                <li>decyzja zatwierdzająca projekt budowlany i udzielająca pozwolenia na budowę (jeśli została wydana),</li>
                <li>umowa przedwstępna sprzedaży nieruchomości.</li>
            </ul>
            <p><strong>Nieruchomość gruntowa zabudowana budynkiem mieszkalnym jednorodzinnym:</strong></p>
            <ul className='page-list'>
                <li>numer księgi wieczystej (w przypadku elektronicznej księgi) lub aktualny odpis z księgi wieczystej,</li>
                <li>wypis z rejestru gruntów,</li>
                <li>kopia mapy zasadniczej (S+E+U) lub mapy ewidencyjne i sytuacyjno – wysokościowej,</li>
                <li>zaświadczenie o przeznaczeniu działki w miejscowym planie zagospodarowania przestrzennego / studium uwarunkowań i kierunków zagospodarowania przestrzennego lub decyzja o warunkach zabudowy,</li>
                <li>decyzja zatwierdzająca projekt budowlany i udzielający pozwolenia na budowę lub decyzja o pozwoleniu na użytkowanie,</li>
                <li>projekt architektoniczno – budowlany lub inwentaryzacja budynku dziennik budowy jeżeli inwestycja nie jest zakończona,</li>
                <li>umowa przedwstępna sprzedaży.</li>
            </ul>
            <p><strong>Nieruchomości komercyjne, usługowe:</strong></p>
            <ul className='page-list'>
                <li>numer księgi wieczystej lub odpis z księgi wieczystej nie starszy niż 3 miesiące,</li>
                <li>wypis z rejestru gruntów ( nie dotyczy nieruchomości lokalowych),</li>
                <li>kopia mapy zasadniczej (S+E+U) lub mapy ewidencyjne i sytuacyjno – wysokościowej ( nie dotyczy nieruchomości lokalowych),</li>
                <li>zaświadczenie o przeznaczeniu działki w miejscowym planie zagospodarowania przestrzennego lub decyzja o warunkach zabudowy,</li>
                <li>decyzja zatwierdzająca projekt budowlany i udzielający pozwolenia na budowę lub decyzja o pozwoleniu na użytkowanie obiektu,</li>
                <li>projekt architektoniczno – budowlany lub inwentaryzacja budynku lub rzut lokalu,</li>
                <li>dziennik budowy jeżeli inwestycja nie jest zakończona (nie dotyczy nieruchomości lokalowych),</li>
                <li>informację o wysokości podatku od nieruchomości,</li>
                <li>informacje o wysokości opłaty za użytkowanie wieczyste gruntu jeśli dotyczy,</li>
                <li>informację o wysokości kosztów zarządu i ochrony budynku; •  informację o wysokości opłat za ubezpieczenie budynku,</li>
                <li>informację na temat wynajętej powierzchni (wysokość stawek najmu, rodzaj zawartej umowy najmu itp).</li>
            </ul>
            <p>Warto wiedzieć, że:</p>
            <ul className='page-list-circle'>
                <li>operat szacunkowy może być wykorzystywany wyłącznie dla celu, dla którego został sporządzony, a zatem operatu sporządzonego np. dla celu sprzedaży nie będziecie Państwo mogli wykorzystać dla potrzeb zabezpieczenia kredytu w banku,</li>
                <li>operat szacunkowy jest ważny maksymalnie przez okres 12 miesięcy od daty jego sporządzenia – po upływie 12 miesięcy może być wykorzystywany wyłącznie po potwierdzeniu jego aktualności przez rzeczoznawcę majątkowego – autora operatu.</li>
            </ul>
        </>
    );
};

export default DocsPage;