import React, { PureComponent, useState } from "react";
import "../styles/components.scss";

function SkillIt() {
  return (
    <>
      <ul className="list">
        <li>
          znajomość React, NodeJS, JS, Express, MongoDB, GIT, BEM, CSS, SASS,
          HTML
        </li>
        <li>obsługa VSC, Mongo Atlas/Compass, Github, Vercel</li>
        <li>
          obsługa MS Office, Corel, Proxmox, Active Directory, Comarch ERP, Avast Business
        </li>
        <li>biegła obsługa komputera + Windows</li>
        <li>
          rozwiązywanie problemów informatycznych, sieciowych, sprzętowych
        </li>
        <li>
          manualne testowanie oprogramowania, przygotowywanie stanowisk pracy
        </li>
        <li>
          przygotowywanie materiałów marketingowych, reklamowych, copywriting<br/>znajdowanie błędów w dokumentacji
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="image twoFirst">
        <img src="../../public/img/it1.jpg" alt="" />
      </div>
      <div className="image twoSecond">
        <img src="../../public/img/it2.jpg" alt="" />
      </div>
    </>
  );
}

export default SkillIt;
