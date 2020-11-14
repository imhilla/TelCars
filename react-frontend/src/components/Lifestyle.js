/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Logo from './Logo';
import NavBar from './Navbar';

class Life extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Logo />
          <NavBar />
        </div>
        <h1>This is the latest</h1>
      </div>
    );
  }
}
export default Life;
