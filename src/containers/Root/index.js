import React from 'react';
// import { Switch, Route } from "react-router-dom";
// import { Redirect } from 'react-router'
// import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

// import { connect } from "react-redux";

import MainPage from "../../components/pages/MainPage";
import store from "../../store/custom";

const Root = () => {
    return (
        <Provider store={store}><MainPage /></Provider>
    );
};
export default Root;
