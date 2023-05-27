import React, { PureComponent, useState } from "react";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <NavLink className="link" to="/contact">
          kontakt
        </NavLink>
      </div>
    </>
  );
};

export default Footer;
