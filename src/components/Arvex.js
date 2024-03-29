import React, { PureComponent, useState } from "react";
import "../styles/components.scss";

function Arvex() {
    return (  
        <>
        <ul className="list">
            <span className="chapter"><li>Arvex Grobelny - asystent ds. marketingu i IT | 2021 – obecnie</li></span>
            <li>obsługa Active Directory, Proxmox, Comarch ERP, Office, Corel</li>
            <li>opieka nad infrastrukturą komputerową i sieciową firmy</li>
            <li>testowanie oprogramowania, rozwiązywanie problemów użytkowników</li>
            <li>naprawa komputerów, drukarek i innego sprzętu</li>
            <li>przygotowywanie ulotek promocyjnych, opakowań na produkty, etykiet, zdjęć, grafik</li>
            <li>aktualizowanie strony internetowej firmy</li>
            <li>sporządzanie i sprawdzanie dokumentacji, tworzenie zestawień cenowych, kalkulacji, raportów</li>
            <li>doradztwo telefoniczne w zakresie użytkowania produktów firmy, dostarczanie dokumentacji</li>
            <li>współpraca z grafikiem, agencją reklamową, dostawcami sprzętu, oprogramowania i innych usług</li>
            <li>kierowanie pracą zespołu marketingowo-informatycznego pod nieobecność przełożonego</li>
            <li></li>
        </ul>
        <div className="image threeFirst"><img src="../../public/img/arv1.jpg" alt="" /></div>
        <div className="image threeSecond"><img src="../../public/img/arv2.jpg" alt="" /></div>
        <div className="image threeThird"><img src="../../public/img/arv3.jpg" alt="" /></div>
        </>
    );
}

export default Arvex;