import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Route, Switch } from 'react-router-dom'
import { customerRoutes } from '../../routes'
import './style.css';

const renderRoutes = ({ path, component, exact }) => (
    <Route key={path} exact={exact} path={path} component={component} />
);

class App extends React.Component {

    render() {  
        return (
            <section className="main">
                <Switch>
                    {
                        customerRoutes.map(route => renderRoutes(route))
                    }
                </Switch>
            </section>
        );
    }
}

const mapStateToProps = state => {
    //const { decodedJWT } = state.loginForm;
    return {
    }
};

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        //...authActions,
    }, dispatch),
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(App);
