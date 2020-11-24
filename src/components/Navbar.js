/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink
          exact
          to="/"
          // className="Nav_link"
          activeClassName="activeRoute"
          activeStyle={{ backgroundColor: 'red' }}
          className="lii"
        >
          HOME
        </NavLink>

        <NavLink
          to="/lifestyle"
          activeClassName="activeRoute"
          activeStyle={{ backgroundColor: 'red' }}
          className="lii"
        >
          LIFESTYLE
        </NavLink>

        <NavLink
          to="/shop"
          className="lii"
          activeClassName="activeRoute"
          activeStyle={{ backgroundColor: 'red' }}
        >
          SHOP
        </NavLink>

        <NavLink
          to="/book"
          className="lii"
          activeClassName="activeRoute"
          activeStyle={{ backgroundColor: 'red' }}
        >
          BOOK
        </NavLink>
      </div>
    );
  }
}

export default withRouter(NavBar);
