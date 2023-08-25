import React, { PureComponent, useState } from "react";
import "../styles/pages.scss";

function Edu() {
  return (
    <div className="page page__edu">
      <div className="display display__edu">
        <ul className="list">
          <span className="chapter"><li>
            Uniwersytet Rolniczy, Wydział Leśny, Kraków / magister inżynier 2015-2021
            
          </li></span>
          <li>
            kierunek: leśnictwo, specjalizacja: leśnictwo w terenach
            zurbanizowanych
          </li>
          <li>
            praca inżynierska:<br/>Struktura lasu o charakterze pierwotnym w rezerwacie Janj (Bośnia i Hercegowina)
          </li>
          <li>
            praca magisterska:<br/>Rozmieszczenie i charakterystyka kolonii lęgowych
            gawrona w Krakowie
          </li>
          <li>
            III liceum ogólnokształcące im. Jana Kochanowskiego w Krakowie
          </li>
          <li>profil turystyczno-społeczny (geografia)</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <div className="image single">
            <img src="../../public/img/edu1.jpg" alt="" />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Edu;
