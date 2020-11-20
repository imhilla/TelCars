/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Logo from './Logo';
import Footer from './Footer';
import NavBar from './Navbar';

class Carview extends React.Component {
  render() {
    return (
      <div>
        <div className="homeContainer">
          <Logo className="logoo" />
          <NavBar className="mynav" />
          <Footer className="footerr" />
        </div>
        {console.log('yes')}
        Hello world
      </div>
    );
  }
}
export default Carview;
