/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Logo from './Logo';
import NavBar from './Navbar';

class Life extends React.Component {
  render() {
    return (
      <div>
        <div className="homeContainer">
          <Logo />
          <NavBar />
        </div>
        <div>
          Latest
        </div>
      </div>
    );
  }
}
export default Life;
