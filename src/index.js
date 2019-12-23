import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from 'axios';
import { history } from './history';

import Root from "./containers/Root";

import './styles/style.scss';
import "./index.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Root />,
    rootElement
);
