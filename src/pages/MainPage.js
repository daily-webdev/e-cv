import React, { PureComponent, useState } from "react";
import "../styles/pages.scss";
import "../styles/mainpage.scss";
import "../styles/images.scss";
import "../styles/components.scss";
import { FaBirthdayCake, FaHouseUser, FaMusic } from "react-icons/fa";

import {
  MdNaturePeople,
  MdOutlineSportsGymnastics,
  MdComputer,
} from "react-icons/md";

function MainPage() {

  let blankX = ["", "", "", "", "", ""];
  const randomsX = blankX.map(() => Math.floor(Math.random() * 25 + 50));

  let blankY = ["", "", "", "", "", ""];
  const randomsY = blankY.map(() => Math.floor(Math.random() * 50 - 25));
  console.log(randomsX);

  return (
    <>
      <section className="page page__main">
        <div className="display">
          {/* <img className="cloud1" src="../../public/img/cloud.png" alt="" />
          <img className="cloud2" src="../../public/img/cloud.png" alt="" />
          <img className="cloud3" src="../../public/img/cloud.png" alt="" /> */}
          <div className="image threeFirstMove">
            <img src="../../public/img/me1.jpg" alt="" />
          </div>
          <div className="image threeSecondMove">
            {" "}
            <img src="../../public/img/me2.jpg" alt="" />
          </div>
          <div className="image threeThirdMove">
            <img src="../../public/img/me3.jpg" alt="" />
          </div>
          <div className="about">
            <ul className="list">
              <li className="about1">przyrodnik</li>
              <li className="about2">sportowiec</li>
              <li className="about3">informatyk</li>
              <li className="about4">muzykant</li>
              <li className="about5">7 września 1996</li>
              <li className="about6">Kraków</li>
            </ul>
          </div>
          <div
            className="bigIcon move1"
            style={{ "--x": randomsX[0] + "vw", "--y": randomsY[0] + "vh" }}
          >
            <MdNaturePeople />
          </div>
          <div
            className="bigIcon move2"
            style={{ "--x": randomsX[1] + "vw", "--y": randomsY[1] + "vh" }}
          >
            <MdOutlineSportsGymnastics />
          </div>
          <div
            className="bigIcon move3"
            style={{ "--x": randomsX[2] + "vw", "--y": randomsY[2] + "vh" }}
          >
            <MdComputer />
          </div>
          <div
            className="bigIcon move4"
            style={{ "--x": randomsX[3] + "vw", "--y": randomsY[3] + "vh" }}
          >
             <FaMusic />
          </div>
          <div
            className="bigIcon move5"
            style={{ "--x": randomsX[4] + "vw", "--y": randomsY[4] + "vh" }}
          >
            <FaBirthdayCake />
          </div>
          <div
            className="bigIcon move6"
            style={{ "--x": randomsX[5] + "vw", "--y": randomsY[5] + "vh" }}
          >
           <FaHouseUser />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
