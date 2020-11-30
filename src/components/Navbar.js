/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { withRouter } from 'react-router';
import {
  NavLink,
  BrowserRouter as Router,
} from 'react-router-dom';

import '../styles/navbar.css';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <Router>

          <NavLink
            exact
            to="/"
            activeClassName="activeRoute"
            activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
            className="lii"
          >
            HOME
          </NavLink>

          <NavLink
            to="/lifestyle"
            activeClassName="activeRoute"
            activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
            className="lii"
          >
            LIFESTYLE
          </NavLink>

          <NavLink
            to="/shop"
            className="lii"
            activeClassName="activeRoute"
            activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
          >
            SHOP
          </NavLink>

          <NavLink
            to="/book"
            className="lii"
            activeClassName="activeRoute"
            activeStyle={{ backgroundColor: 'rgb(142, 255, 142)' }}
          >
            BOOK
          </NavLink>
        </Router>
      </div>
    );
  }
}

// export default withRouter(NavBar);
export default NavBar;
