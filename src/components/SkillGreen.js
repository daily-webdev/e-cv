import React, { PureComponent, useState } from "react";
import "../styles/components.scss";

function SkillGreen() {
  return (
    <>
      <ul className="list">
        <li>rozpoznawanie gatunków drzew, krzewów, ptaków, ssaków, roślin runa, obecności zwierząt</li>
        <li>rozpoznawanie zachodzących procesów i zjawisk przyrodniczych/biologicznych/ekologicznych</li>
        <li>identyfikacja i inwentaryzacja obiektów o znaczeniu ekologicznym, np. gniazd, martwego drewna</li>
        <li>mierzenie cech drzew, drzewostanu</li>
        <li>ocena siedlisk, składu gatunkowego, ekstrapolacja stanu siedliska wstecz i w przód na osi czasu</li>
        <li>planowanie działań pielęgnacyjnych, hodowlanych, urządzeniowych drzewostanu</li>
        <li>planowanie działań arborystycznych, pielęgnacyjnych pojedynczych drzew</li>
        <li>ocena stanu zdrowotnego, bezpieczeństwa drzew</li>
        <li>doświadczenie w ogrodnictwie, dobre praktyki sadzenia, pielęgnowania, obsługa narzędzi ręcznych/spalinowych</li>
        <li>znajomość przepisów w obszarze przyrodniczym, środowiskowym</li>
        <li>obsługa QGIS, MS Office, czytanie i tworzenie map, dobra orientacja w terenie</li>
        <li>rozpoznawanie zagrożeń środowiskowych, orientacja w obszarze konfliktu człowiek-środowisko</li>
      </ul>
      <div className="image imageSGreen1"><img src="../../public/img/sgreen1.jpg" alt="" /></div>
        <div className="image imageSGreen2"><img src="../../public/img/sgreen2.jpg" alt="" /></div>
        <div className="image imageSGreen3"><img src="../../public/img/sgreen3.jpg" alt="" /></div>
    </>
  );
}

export default SkillGreen;
