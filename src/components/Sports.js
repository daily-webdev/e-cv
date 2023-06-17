import React, { PureComponent, useState } from "react";
import "../styles/components.scss";

function Sports() {
  return (
    <>
      
        <ul className="list">
          <li>wspinaczka ściankowa i skalna</li>
          <li>pływanie, kajaki</li>
          <li>bieganie</li>
          <li>trening siłowy, kalistenika</li>
          <li>tenis stołowy</li>
          <li>łyżwy</li>
          <li>bilard</li>
          <li>fizjoterapia</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <div className="image threeFirst"><img src="../../public/img/sport1.jpg" alt="" /></div>
        <div className="image threeSecond"><img src="../../public/img/sport2.jpg" alt="" /></div>
        <div className="image threeThird"><img src="../../public/img/sport3.jpg" alt="" /></div>
        </ul>
      
     
    </>
  );
}

export default Sports;
