/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import NavBar from '../components/Navbar';
import '../styles/home.css';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Items from '../components/Items';
import Logout from '../components/auth/Logout';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    const { handleLogin } = this.props;
    handleLogin(data);
  }

  handleLogoutClick() {
    const { handleLogout } = this.props;
    axios.delete('http://localhost:3001/logout', { withCredentials: true });
    handleLogout();
  }

  render() {
    return (
      <div className="home">
        <div className="homeContainer">
          <Logo />
          <NavBar />
          <Logout />
          <Footer />
        </div>
        <div className="descriptionContainer">
          <h1>LATEST CAR MODELS</h1>
          <h2>Best 2020 Electric Cars for Mileage Range</h2>
          <div className="dots">.................</div>
          <Items />
        </div>
        <div />
      </div>
    );
  }
}

Home.propTypes = {
  handleLogout: PropTypes.func,
  handleLogin: PropTypes.func,
};

Home.defaultProps = {
  handleLogout: () => { },
  handleLogin: () => { },
};

export default Home;
