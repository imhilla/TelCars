/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Logo from './Logo';
import NavBar from './Navbar';

class Shop extends React.Component {
  render() {
    return (
      <div>
        <div className="homeContainer">
          <Logo />
          <NavBar />
        </div>
      </div>
    );
  }
}
export default Shop;
