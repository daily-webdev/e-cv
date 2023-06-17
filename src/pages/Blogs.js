import React, { PureComponent, useState } from "react";
import "../styles/pages.scss";

function Blogs() {
  return (
    <div className="page page__blogs">
      <div className="display display__blogs">
        {/* <ul className="list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    
                </ul> */}
        <iframe
          className="frame"
          src="https://wordpress.dailydev.pl"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default Blogs;
