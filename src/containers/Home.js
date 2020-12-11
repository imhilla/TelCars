/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch, useSelector,
} from 'react-redux';
import { getItems, setUser } from '../actions/index';
import NavBar from '../components/Navbar';
import '../styles/home.css';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Items from '../components/Items';
import Logout from '../components/auth/Logout';

const Home = ({ handleLogout, handleLogin }) => {
  const [, rerender] = useState(false);

  // const currentUser = useSelector(state => state.currentUser);
  const currentItems = useSelector(state => state.getAppointments);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser());
    dispatch(getItems());
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
  const itemContainer = currentItems.items === undefined
    ? (<div>Loading</div>)
    : (
      <Items response={currentItems.items} />);
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
};

Home.propTypes = {
  handleLogout: PropTypes.func,
  handleLogin: PropTypes.func,
};

Home.defaultProps = {
  handleLogout: () => { },
  handleLogin: () => { },
};

export default Home;
