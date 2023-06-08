import React, { PureComponent, useState } from "react";
import {
  BrowserRouter,
  Route,
  NavLink,
  Routes,
  useNavigate,
} from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  // // const history = useNavigate();
  // // const handleClick = () => {
  // //   history.forceRefresh();
  // };

  return (
    <>
      <div className="footer">
        <NavLink className="link" to="/contact" onClick={handleClick}>
          kontakt
        </NavLink>
      </div>
    </>
  );
};

export default Footer;
