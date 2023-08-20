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
  // WYMUSZENIE ODŚWIEŻANIA STRONY
  // // const history = useNavigate();
  // // const handleClick = () => {
  // //   history.forceRefresh();
  // };
  // onClick={handleClick} do NavLinka

  return (
    <>
      <div className="footer">
        <NavLink className="link" to="/contact">
          formularz kontaktowy
        </NavLink>
      </div>
    </>
  );
};

export default Footer;
