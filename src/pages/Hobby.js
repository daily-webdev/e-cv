import React, { PureComponent, useState } from "react";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import "../styles/pages.scss";
import Sports from "../components/Sports";
import Green from "../components/Green";
import Music from "../components/Music";
import Others from "../components/Others";

function Hobby() {
  return (
    <>
      <section className="page page__hobby">
        <nav className="categories categories__hobby">
          <ul>
            <li>
              <NavLink className="link" to="/hobby/sports">sporty</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/hobby/green">przyroda</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/hobby/music">muzyka</NavLink>
            </li>
             <li>
              <NavLink className="link" to="/hobby/others">pozostałe</NavLink>
            </li>
          </ul>
        </nav>
        <div className="display display__hobby">
       
          <Routes>
          <Route path="/sports" element={<Sports />}></Route>
          <Route path="/green" element={<Green />}></Route>
          <Route path="/music" element={<Music />}></Route>
          <Route path="/others" element={<Others />}></Route>
        </Routes>
        </div>
      </section>
    </>
  );
}

export default Hobby;
