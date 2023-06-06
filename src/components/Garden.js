import React, { PureComponent, useState } from "react";
import "../styles/components.scss";

function Garden() {
    return (  
        <>
       <ul className="list">
        <li>Ogrody Słomniki - wykonawca projektów ogrodów 2013 – 2021</li>
        <li>uzgadnianie realizacji projektu ze zleceniodawcą i klientem</li>
        <li>kompleksowa obsługa klienta od pomysłu do realizacji projektu ogrodu</li>
        <li>planowanie, realizowanie i kontrolowanie sprawnej i efektywnej pracy własnej i zespołu (2-6 osób)</li>
        <li>planowanie pozyskania i rozdysponowania zasobów, kontrola zapasów - materiałów i narzędzi</li>
        <li>koordynowanie przepływu informacji między klientem, zleceniodawcą i zespołem</li>
        <li>zastępowanie właściciela firmy pod jego nieobecność (urlop, choroba)</li>
        <li>obsługa kasy fiskalnej i rozliczanie sprzedaży</li>
        <li>transport, prace reparacyjne i zaopatrzeniowe w części i narzędzia</li>
        <li></li>
        <li></li>
        <li></li>
       </ul>
       <div className="image threeFirst"><img src="../../public/img/gar1.jpg" alt="" /></div>
        <div className="image threeSecond"><img src="../../public/img/gar2.jpg" alt="" /></div>
        <div className="image threeThird"><img src="../../public/img/gar3.jpg" alt="" /></div>
        </>
    );
}

export default Garden;