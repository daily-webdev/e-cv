import React, { PureComponent, useState } from "react";
import { BrowserRouter, Route, NavLink, Routes, useLocation } from "react-router-dom";
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

  const location = useLocation();
  const currentPath = location.pathname;

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
              <NavLink className="link" to="/skills/it" style={currentPath.startsWith("/skills") ? {"box-shadow": "0px 0px 10px 5px rgba(111, 79, 28, 0.737)"} : {}}>
                umiejętności
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/exp/arvex" style={currentPath.startsWith("/exp") ? {"box-shadow": "0px 0px 10px 5px rgba(111, 79, 28, 0.737)"} : {}}>
                doświadczenie
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/blogs" style={currentPath.startsWith("/blogs") ? {"box-shadow": "0px 0px 10px 5px rgba(111, 79, 28, 0.737)"} : {}}>
                projekty
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/edu" style={currentPath.startsWith("/edu") ? {"box-shadow": "0px 0px 10px 5px rgba(111, 79, 28, 0.737)"} : {}}>
                wykształcenie
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/hobby/sports" style={currentPath.startsWith("/hobby") ? {"box-shadow": "0px 0px 10px 5px rgba(111, 79, 28, 0.737)"} : {}}>
                zainteresowania
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/vol" style={currentPath.startsWith("/vol") ? {"box-shadow": "0px 0px 10px 5px rgba(111, 79, 28, 0.737)"} : {}}>
                wolontariat
              </NavLink>
            </li>
            <li>
              <NavLink className="link" to="/quotes" style={currentPath.startsWith("/quotes") ? {"box-shadow": "0px 0px 10px 5px rgba(111, 79, 28, 0.737)"} : {}}>
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
