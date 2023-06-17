import React, { PureComponent, useEffect, useState } from "react";
import "../styles/components.scss";
import { captchaSK } from "../process.js";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    tokenValue: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${captchaSK}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const cleanInputs = () => {
    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const setToken = async () => {
   await grecaptcha.execute(captchaSK, { action: "submit" }).then((token) => {
      setData({
       ...data,
       tokenValue: token,
     });
      console.log(token);
      console.log(data);
      
    });
  };

  const onSubmit = async () => {

    console.log(data);

    // warunek błędu
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert("niewypełnione");
      return;
    }


    fetch("https://mailjet.vercel.app/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      // mode: "no-cors"
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
  };

  return (
    <>
      <form id="mail-form">
        <ul className="list">
          <li><label htmlFor="name">Przedstaw się</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        /></li>
        <li><label htmlFor="email">Twój email</label>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleChange}
        /></li>
        <li><label htmlFor="subject">Temat</label>
        <input
          type="text"
          name="subject"
          value={data.subject}
          onChange={handleChange}
        /></li>
        <li><label htmlFor="message">Wiadomość</label>
        <input
          type="text"
          name="message"
          value={data.message}
          onChange={handleChange}
        /></li>
        <li><button onClick={setToken}>nie jestem robotem</button></li>
        <li><button
          className="g-recaptcha"
          data-sitekey={captchaSK}
          onClick={onSubmit}
          data-action="submit"
        >
          wyślij
        </button></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        
        
        
        

        
      </form>
      
    </>
  );
}

export default Form;
