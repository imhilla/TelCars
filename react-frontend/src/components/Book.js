/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Footer from './Footer';
import Logo from './Logo';
import NavBar from './Navbar';

class Book extends React.Component {
  render() {
    return (
      <div>
        <div className="homeContainer">
          <Logo />
          <NavBar />
          <Footer />
        </div>
      </div>
    );
  }
}
export default Book;
