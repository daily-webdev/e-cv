import React, { PureComponent, useState } from "react";
import "../styles/components.scss";

function SkillGen() {
  return (
    <>
      <ul className="list">
        <li>
          sprawna komunikacja z dostawcami usług, klientami i innymi podmiotami
          współpracującymi
        </li>
        <li>organizacja i planowanie działań własnych i zespołu</li>
        <li>znajdowanie rozwiązań przy małej dostępności zasobów</li>
        <li>samodzielność w uczeniu się i szukaniu rozwiązań</li>
        <li>szybkie wypracowywanie stereotypów dynamicznych</li>
        <li>obserwacja i wdrażanie dobrych praktyk</li>
        <li>
          rozpatrywanie słabych i mocnych stron oraz szans i zagrożeń w
          procesach podejmowania decyzji
        </li>
        <li>myślenie analityczne </li>
        <li>język angielski B2</li>
        <li>prawo jazdy kat. B, prowadzenie samochodów dostawczych</li>
        <li>pierwsza pomoc - sanitariusz HOPR</li>
        <li>a</li>
      </ul>
      <div className="image threeFirst"><img src="../../public/img/gen1.jpg" alt="" /></div>
        <div className="image threeSecond"><img src="../../public/img/gen2.jpg" alt="" /></div>
        <div className="image threeThird"><img src="../../public/img/gen3.jpg" alt="" /></div>
    </>
  );
}

export default SkillGen;
