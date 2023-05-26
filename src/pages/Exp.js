import React, { PureComponent, useState } from "react";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import "../styles/pages.scss";
import Arvex from "../components/Arvex";
import Garden from "../components/Garden";
import Alpin from "../components/Alpin";
import Forest from "../components/Forest";
import Gallery from "../components/Gallery";

function Exp() {
  return (
    <>
      <section className="page page__exp">
        <nav className="categories categories__exp">
          <ul>
            <li>
              <NavLink className="link" to="/exp/arvex">arvex</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/exp/garden">ogrody</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/exp/alpin">alpin</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/exp/forest">lasy państwowe</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/exp/gallery">stare mury</NavLink>
            </li>
          </ul>
        </nav>
        <div className="display display__exp">
          <Routes>
            <Route path="/arvex" element={<Arvex />}></Route>
            <Route path="/garden" element={<Garden />}></Route>
            <Route path="/alpin" element={<Alpin />}></Route>
            <Route path="/forest" element={<Forest />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
          </Routes>
        </div>
      </section>
    </>
  );
}

export default Exp;
