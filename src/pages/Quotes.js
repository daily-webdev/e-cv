import React, { PureComponent, useState } from "react";
import "../styles/pages.scss";

function Quotes() {
  return (
    <div className="page page__quotes">
      <div className="display display__quotes">
        <ul className="list">
          <li>Skuteczność jest miarą prawdy.</li>
          <li>
            Nie wszystko co warto się opłaca i nie wszystko co się opłaca warto.
          </li>
          
          <li>
            Zrobienie czegoś nowego jest tym, czego większość ludzi boi się
            najbardziej.
          </li>
          <li>Uczymy się coś robić robiąc to - nie ma innego sposobu.</li>
          <li>Prawdziwe marzenia nie pozwalają siedzieć w fotelu.</li>
          <li>
            Starajcie się zostawiać świat choć odrobinę lepszym niż go
            zastaliście.
          </li>
          <li>
            Wszystko możesz, nic nie musisz, ale wszystko ma swoje konsekwencje.
          </li>

          <li>
            A mistake that keeps being repeated is not a mistake, it’s a choice.
          </li>
          <li>The aim of argument should not be victory, but progress.</li>
          <li>
            Man cannot remake himself without suffering, for he is both the
            marble and the sculptor.
          </li>
          <li>It’s hard to light a candle, easy to curse the dark instead. </li>
          <li>
            Nie sama trudność rzeczy sprawia, że nie ważymy się ich wykonać,
            lecz trudnymi czyni je to, że nie ważymy się ich wykonać.
          </li>
        </ul>
        <div className="image single"><img src="../../public/img/quote1.jpg" alt="" /></div>
      </div>
    </div>
  );
}

export default Quotes;
