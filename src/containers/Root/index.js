import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import {Redirect} from 'react-router'
import { ConnectedRouter } from "connected-react-router";

import App from '../App';
import AuthPage from '../../components/pages/AuthPage'
import { connect } from "react-redux";
import { history } from './../../history';

class Root extends Component {

    render() {
        const { history } = this.props;
        return (
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/main" component={App} />
                    <Route path="/login" component={AuthPage} />
                    <Route exact path="/" render={() => <Redirect to="/main"/> }/>
                </Switch>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = state => {
    // if(!state.loginForm.decodedJWT) history.push('/login')
    return {
        //isAuthorized: !!state.loginForm.decodedJWT,
    }
};

// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators({
//       ...authActions,
//     }, dispatch),
//   });

export default connect(mapStateToProps)(Root);
