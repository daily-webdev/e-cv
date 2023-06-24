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
          {/* <img className="cloud1" src="../../public/img/cloud.png" alt="" />
          <img className="cloud2" src="../../public/img/cloud.png" alt="" />
          <img className="cloud3" src="../../public/img/cloud.png" alt="" /> */}
          <div className="image threeFirstMove"><img  src="../../public/img/me1.jpg" alt="" /></div>
          <div className="image threeSecondMove">   <img  src="../../public/img/me2.jpg" alt="" /></div>
          <div className="image threeThirdMove"><img  src="../../public/img/me3.jpg" alt="" /></div>
          <div className="about">
            <ul className="list">
              <li className="about1"><span><FaHouseUser /></span>Kraków</li>
              <li className="about2"><span><FaBirthdayCake /></span>7 września 1996</li>
              <li className="about3"><span><MdNaturePeople /></span>przyrodnik</li>
              <li className="about4"><span><MdOutlineSportsGymnastics /></span>sportowiec</li>
              <li className="about5"><span><MdComputer /></span>informatyk</li>
              <li className="about6"><span><FaMusic /></span>muzykant</li>
            </ul>
          </div>
          
       
          
          </div>
      </section>
    </>
  );
}

export default MainPage;
