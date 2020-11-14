/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">HOME</Link>
        <Link to="/lifestyle">LIFESTYLE</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/book">BOOK</Link>
      </div>
    );
  }
}

export default NavBar;
