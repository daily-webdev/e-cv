import React, { PureComponent, useState } from "react";
import { BrowserRouter, Route, NavLink, Routes, useLocation } from "react-router-dom";
import "../styles/pages.scss";
import SkillIt from "../components/SkillIt";
import SkillGen from "../components/SkillGen";
import SkillGreen from "../components/SkillGreen";

function Skills() {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <section className="page page__skills">
      <nav className="categories categories__skills">
        <ul>
          <li>
            <NavLink className="link" to="/skills/it" style={currentPath.startsWith("/skills/it") ? {"box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)"} : {}}>
              it
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/skills/general" style={currentPath.startsWith("/skills/general") ? {"box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)"} : {}}>
              ogólne
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/skills/green" style={currentPath.startsWith("/skills/green") ? {"box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)"} : {}}>
              przyrodnicze
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="display display__skills">
        <Routes>
          <Route path="/it" element={<SkillIt />}></Route>
          <Route path="/general" element={<SkillGen />}></Route>
          <Route path="/green" element={<SkillGreen />}></Route>
        </Routes>
      </div>
    </section>
  );
}

export default Skills;
