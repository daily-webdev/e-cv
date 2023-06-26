import React, { PureComponent, useState } from "react";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import "../styles/main.scss";
import MainPage from "../pages/MainPage";
import Skills from "../pages/Skills";
import Exp from "../pages/Exp";
import Blogs from "../pages/Blogs";
import Edu from "../pages/Edu";
import Hobby from "../pages/Hobby";
import Vol from "../pages/Vol";
import Quotes from "../pages/Quotes";
import Contact from "../pages/Contact";

function Main() {
  return (
    <>
    
      <section className="main">
        
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/skills/*" element={<Skills />}></Route>
          <Route path="/exp/*" element={<Exp />}></Route>
          
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/edu" element={<Edu />}></Route>
          <Route path="/hobby/*" element={<Hobby />}></Route>
          <Route path="/vol" element={<Vol />}></Route>
          <Route path="/quotes" element={<Quotes />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        
      </section>
      <section className="aside">
        <nav className="aside__menu">
          <ul>
            <li>
              <NavLink className="link" to="/skills/it">
                umiejętności
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/exp/arvex">
                doświadczenie
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/blogs">
                projekty
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/edu">
                wykształcenie
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/hobby/sports">
                zainteresowania
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/vol">
                wolontariat
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/quotes">
                ulubione cytaty
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </section>
      
    </>
  );
}

export default Main;
