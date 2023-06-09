import React, { PureComponent, useState, Suspense, lazy } from "react";
import { BrowserRouter, Route, NavLink, Routes, useLocation } from "react-router-dom";
// const Lazy = lazy(() => import("./Lazy"));
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {



  return (
    <>
    
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
        {/* <Suspense fallback={<div>loading...</div>}>
        <Lazy />
      </Suspense> */}
     </BrowserRouter>
    </>
  );
};

export default App;
