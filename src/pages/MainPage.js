import React, { PureComponent, useState } from "react";
import "../styles/pages.scss";
import "../styles/mainpage.scss"
import "../styles/images.scss"
import "../styles/components.scss"
import {
  FaBirthdayCake,
  FaHouseUser,
  FaMusic,
  FaComputer
} from "react-icons/fa";

import {MdNaturePeople,
  MdOutlineSportsGymnastics,
  MdComputer} from "react-icons/md"

function MainPage() {
  return (
    <>
      <section className="page page__main">
        <div className="display">
          <img className="cloud1" src="../../public/img/cloud.png" alt="" />
          <img className="cloud2" src="../../public/img/cloud.png" alt="" />
          <img className="cloud3" src="../../public/img/cloud.png" alt="" />
          <div className="image threeFirstDelay"><img  src="../../public/img/me1.jpg" alt="" /></div>
          <div className="image threeSecondDelay">   <img  src="../../public/img/me2.jpg" alt="" /></div>
          <div className="image threeThirdDelay"><img  src="../../public/img/me3.jpg" alt="" /></div>
          <div className="about">
            <ul className="list">
              <li><span><FaHouseUser /></span>Kraków</li>
              <li><span><FaBirthdayCake /></span>7 września 1996</li>
              <li><span><MdNaturePeople /></span>przyrodnik</li>
              <li><span><MdOutlineSportsGymnastics /></span>sportowiec</li>
              <li><span><MdComputer /></span>informatyk</li>
              <li><span><FaMusic /></span>muzykant</li>
            </ul>
          </div>
          
       
          
          </div>
      </section>
    </>
  );
}

export default MainPage;
