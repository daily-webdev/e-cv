import React, { PureComponent, useState } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  useLocation,
} from "react-router-dom";
import "../styles/pages.scss";
import Arvex from "../components/Arvex";
import Garden from "../components/Garden";
import Alpin from "../components/Alpin";
import Forest from "../components/Forest";
import Gallery from "../components/Gallery";

function Exp() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <section className="page page__exp">
        <nav className="categories categories__exp">
          <ul>
            <li>
              <NavLink
                className="link"
                to="/exp/arvex"
                style={
                  currentPath.startsWith("/exp/arvex")
                    ? {
                        "box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)",
                      }
                    : {}
                }
              >
                arvex
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/exp/garden"
                style={
                  currentPath.startsWith("/exp/garden")
                    ? {
                        "box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)",
                      }
                    : {}
                }
              >
                ogrody
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/exp/alpin"
                style={
                  currentPath.startsWith("/exp/alpin")
                    ? {
                        "box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)",
                      }
                    : {}
                }
              >
                alpin
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/exp/forest"
                style={
                  currentPath.startsWith("/exp/forest")
                    ? {
                        "box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)",
                      }
                    : {}
                }
              >
                lasy państwowe
              </NavLink>
            </li>
            <li>
              <NavLink
                className="link"
                to="/exp/gallery"
                style={
                  currentPath.startsWith("/exp/gallery")
                    ? {
                        "box-shadow": "0px 0px 10px 5px rgb(87, 155, 177, 0.7)",
                      }
                    : {}
                }
              >
                stare mury
              </NavLink>
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
