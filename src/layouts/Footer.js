import React, { PureComponent, useState } from "react";
import "../styles/footer.scss";
import Form from "../components/Form";

const Footer = () => {
  // const data = {
  //   name: "uzytkownik",
  //   email: "",
  //   subject: "test",
  //   message: "test",
  // }
  // const sendMail = () => {
  //   fetch("https://mailjet.vercel.app/sendemail", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  // .then((res) => {
  //   return res.json();})
  // .then((data) => {
  //   console.log(data);
  // });


return (
  <>
    <div className="footer">
      <Form />
      {/* <button onClick={sendMail}>mail</button> */}
    </div>
  </>
);
}

export default Footer;
