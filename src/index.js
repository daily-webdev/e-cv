import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./styles/index.scss";
import App from "./layouts/App";

render(<App />, document.getElementById("root"));
