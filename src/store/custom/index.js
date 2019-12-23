import React from "react";
import ReactDOM from "react-dom";

import { createStore, bindActionCreators } from "redux";

import reducer from "../reducers/reducer";
import * as actions from "./handlers";

const store = createStore(reducer);
const { dispatch, subscribe } = store;

const { showStatus, refreshData } = bindActionCreators(actions, dispatch);

const updateView = () => {
    showStatus();
    // refreshData();
    // console.log("kjjk");
};

updateView();
// subscribe(updateView);

export default store;