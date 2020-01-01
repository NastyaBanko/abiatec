// @flow
import * as React from 'react';


class AuthPage extends React.Component {

  // shouldComponentUpdate(prevProps) {
  //   return prevProps.location.pathname !== this.props.location.pathname;
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.location.pathname !== this.props.location.pathname) {
  //     // eslint-disable-next-line react/no-did-update-set-state
  //     this.setState({ prevLocation: prevProps.location });
  //   }
  // }

  render() {
    return (
        <h2>AuthPage</h2>
    );
  }
}

export default AuthPage;
