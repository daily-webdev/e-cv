import React, { PureComponent, useState } from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaGoogle,
  FaPhoneSquare,
} from "react-icons/fa";
import "../styles/header.scss";

function Header() {
  // phone dialog
  const [isPhone, setIsPhone] = useState(false);
  const handlePhoneOpen = () => {
    if (!isPhone) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };
  const handlePhoneClose = () => {
    setIsPhone(false);
  };
  // mail dialog
  const [isMail, setIsMail] = useState(false);
  const handleMailOpen = () => {
    if (!isMail) {
      setIsMail(true);
    } else {
      setIsMail(false);
    }
  };
  const handleMailClose = () => {
    setIsMail(false);
  };

  return (
    <>
      <section className="header">
        <div className="titles">
          <a className="link" href="/">
            <h1>web curriculum vitae</h1>
            <h2>Marcin Taubler</h2>
          </a>
        </div>
        <div className="social">
          <a className="link" href="https://www.facebook.com/marcin.taubler/">
            <FaFacebook />
          </a>
          <a
            className="link"
            href="https://www.linkedin.com/in/marcin-taubler/"
          >
            <FaLinkedin />
          </a>
          <button onClick={handleMailOpen}>
            <FaGoogle />
          </button>
          <button onClick={handlePhoneOpen}>
            <FaPhoneSquare />
          </button>
        </div>
      </section>
      {isPhone && (
        <div className="dialog dialog__phone">
          <button onClick={handlePhoneClose}></button>
          <div className="dialog dialog__phone">
            <p>730 130 531</p>
          </div>
        </div>
      )}

      {isMail && (
        <div className="dialog dialog__mail">
          <button onClick={handleMailClose}></button>
          <div className="dialog dialog__mail">
            <p>taublermarcin@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
