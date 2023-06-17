import React, { PureComponent, useState } from "react";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import "../styles/pages.scss";
import Form from "../components/Form";

function Contact() {
  return (
    <div className="page">
      <div className="display">
       <Form />
      </div>
    </div>
  );
}

export default Contact;
