/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Footer from './Footer';
import Logo from './Logo';
import NavBar from './Navbar';
import Appointment from './Appointment';

class Book extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="homeContainer">
          <Logo />
          <NavBar />
          <Footer />
        </div>
        <div>
          <Appointment />
        </div>
      </div>
    );
  }
}
export default Book;
