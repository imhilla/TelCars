/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

import '../styles/navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink
          exact
          to="/"
          activeClassName="activeRoute"
          activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
          className="lii"
          onClick={this.handleHome}
        >
          HOME
        </NavLink>

        <NavLink
          to="/lifestyle"
          exact
          activeClassName="activeRoute"
          activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
          className="lii"
        >
          LIFESTYLE
        </NavLink>

        <NavLink
          exact
          to="/shop"
          className="lii"
          activeClassName="activeRoute"
          activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}

        >
          SHOP
        </NavLink>

        <NavLink
          to="/book"
          exact
          className="lii"
          activeClassName="activeRoute"
          activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
        >
          BOOK
        </NavLink>
      </div>
    );
  }
}

export default NavBar;
