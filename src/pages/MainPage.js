import React, { PureComponent, useState } from "react";
import "../styles/pages.scss";
import "../styles/mainpage.scss"

function MainPage() {
  return (
    <>
      <section className="page page__main">
        <div className="display">
          <img className="cloud1" src="../../public/img/cloud.png" alt="" />
          <img className="cloud2" src="../../public/img/cloud.png" alt="" />
          <img className="cloud3" src="../../public/img/cloud.png" alt="" />

          </div>
      </section>
    </>
  );
}

export default MainPage;
