/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
// import Login from './auth/Login';
import Logout from './auth/Logout';
// import Registration from './auth/Registration';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push('/dashboard');
  }

  handleLogoutClick() {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(error => {
        console.log('logout errors', error);
      });
    this.props.handleLogout();
  }

  render() {
    return (
      <div>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Logout />
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        {/* <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
      </div>
    );
  }
}
export default Home;
