/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="/" className="lii">HOME</Link>
        <Link to="/lifestyle" className="lii">LIFESTYLE</Link>
        <Link to="/shop" className="lii">SHOP</Link>
        <Link to="/book" className="lii">BOOK</Link>
      </div>
    );
  }
}

export default NavBar;
