import React, { PureComponent, useEffect, useState } from "react";
import "../styles/components.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { captchaSK } from "../process.js";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    token: "",
  });

  const [isRecapOk, setRecapOk] = useState(false);

  // const [tokenValue, setTokenValue] = useState("");

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleRecap = (token) => {
    if (token) {
      setRecapOk(true);
      setData({
        ...data,
        token: token,
      });
    } else {
      setRecapOk(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanInputs = () => {
      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    };

    // warunek błędu
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert("niewypełnione");
      return;
    }
    if (isRecapOk) {
      fetch("https://mailjet.vercel.app/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          return res.json();
        })
        .then((restext) => {
          {
            console.log(restext);
          }
        })
        .catch((err) => {
          // zrób coś z błędem jeśli nie połączy z serwerem
        });

      cleanInputs();
    } else {
      alert("Zaznacz że nie jesteś robotem");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="mail-form">
        <label htmlFor="name">Przedstaw się</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Twój email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="subject">Temat</label>
        <input
          type="text"
          name="subject"
          value={data.subject}
          onChange={handleChange}
        />
        <label htmlFor="message">Wiadomość</label>
        <input
          type="text"
          name="message"
          value={data.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
        
      </form>
      <ReCAPTCHA sitekey={captchaSK} onChange={handleRecap}/>
      
    </>
  );
}

export default Form;
