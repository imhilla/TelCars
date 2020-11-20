/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Route,
} from 'react-router-dom';
import axios from 'axios';
import NavBar from './Navbar';
import './home.css';
import Logo from './Logo';
import Footer from './Footer';
import Items from './Items';
// import Login from './auth/Login';
// import Logout from './auth/Logout';
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
      <div className="home">
        <div className="homeContainer">
          <Logo />
          <NavBar className="mynav" />
          <Footer />
        </div>
        <div className="descriptionContainer">
          <h1>LATEST 2020 CAR MODELS</h1>
          <h2>Please select our top lates cars of choice</h2>
          <Items />
          {/* <Logout /> */}
        </div>
        {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        {/* <Login handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
        <div />
      </div>
    );
  }
}
export default Home;
