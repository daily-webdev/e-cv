import React, { PureComponent, useState } from "react";
import { BrowserRouter, Route, NavLink, Routes, useLocation } from "react-router-dom";
import "../styles/pages.scss";
import Sports from "../components/Sports";
import Green from "../components/Green";
import Music from "../components/Music";
import Others from "../components/Others";

function Hobby() {

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <section className="page page__hobby">
        <nav className="categories categories__hobby">
          <ul>
            <li>
              <NavLink className="link" to="/hobby/sports" style={
                  currentPath.startsWith("/hobby/sports")
                    ? {
                        "box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)",
                      }
                    : {}
                }>sporty</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/hobby/green" style={
                  currentPath.startsWith("/hobby/green")
                    ? {
                        "box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)",
                      }
                    : {}
                }>przyroda</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/hobby/music" style={
                  currentPath.startsWith("/hobby/music")
                    ? {
                        "box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)",
                      }
                    : {}
                }>muzyka</NavLink>
            </li>
             <li>
              <NavLink className="link" to="/hobby/others" style={
                  currentPath.startsWith("/hobby/others")
                    ? {
                        "box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)",
                      }
                    : {}
                }>pozostałe</NavLink>
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
