import React, { PureComponent, useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import "../styles/app.scss";
// const Lazy = lazy(() => import("./Lazy"));
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {


  return (
    <>
      <Header />
      <Main />
      <Footer />
      {/* <Suspense fallback={<div>loading...</div>}>
        <Lazy />
      </Suspense> */}
    </>
  );
};

export default App;
