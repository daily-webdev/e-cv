import React, { PureComponent, useState } from "react";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import "../styles/pages.scss";
import SkillIt from "../components/SkillIt";
import SkillGen from "../components/SkillGen";
import SkillGreen from "../components/SkillGreen";

function Skills() {
  return (
    <section className="page page__skills">
      <nav className="categories categories__skills">
        <ul>
          <li>
            <NavLink className="link" to="/skills/it">
              it
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/skills/general">
              ogólne
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/skills/green">
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
