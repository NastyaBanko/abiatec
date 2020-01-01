import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import axios from 'axios';
import {history} from './history';

import configureStore from "./store";
import makeHeadersManager from './managers/headers';
import * as serviceWorker from "./serviceWorker";
import makeApi from './api';
import Root from "./containers/Root";

import './styles/style.scss';
import "./index.css";

const configure = async () => {
    //const history = createBrowserHistory();
    //const headersManager = makeHeadersManager({ authManager });

    const api = makeApi({ client: axios });
    const store = configureStore({ api, history });

    // const JWTcreds = authManager.getCredentials();

   // actions.getJwtDecoded({decodedJWT:JWTcreds})
    // if (JWTcreds) {
    //     localStorage.setItem('token', JWTcreds);
    //     history.push('/dash');
    // }

    const rootElement = document.getElementById("root");

    ReactDOM.render(
        <Provider store={store}>
            <Root history={history} />
        </Provider>,
        rootElement
    );

    serviceWorker.unregister();
};

configure();
