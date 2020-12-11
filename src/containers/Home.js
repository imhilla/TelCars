/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, ReactReduxContext } from 'react-redux';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getItems } from '../actions/index';
import NavBar from '../components/Navbar';
import '../styles/home.css';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Items from '../components/Items';
import Logout from '../components/auth/Logout';

const Home = ({ getItems, handleLogout, handleLogin }) => {
  const [, rerender] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => rerender(null), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const handleSuccessfulAuth = data => {
    handleLogin(data);
  };

  const handleLogoutClick = () => {
    handleLogout();
  };
  getItems();

  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        const nowState = store.getState();
        console.log(nowState.getAppointments.items.length);
        const itemContainer = nowState.getAppointments.items.length === 0
          ? (<div>Loading</div>)
          : (
            <Items response={nowState.getAppointments.items} />);
        return (
          <div className="home">
            <div className="homeContainer">
              <Logo />
              <NavBar />
              <Logout handleLogout={handleLogoutClick} />
              <Footer />
            </div>
            <div className="descriptionContainer">
              <h1>LATEST CAR MODELS</h1>
              <h2>Best 2020 Electric Cars for Mileage Range</h2>
              <div className="dots">.................</div>
              {itemContainer}
            </div>
            <div />
          </div>
        );
      }}
    </ReactReduxContext.Consumer>
  );
};

Home.propTypes = {
  handleLogout: PropTypes.func,
  handleLogin: PropTypes.func,
};

Home.defaultProps = {
  handleLogout: () => { },
  handleLogin: () => { },
};

const mapStateToProps = state => ({ items: state.items });

export default connect(mapStateToProps, { getItems })(Home);
