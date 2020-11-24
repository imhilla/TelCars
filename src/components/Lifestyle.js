/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import teslaWhite from '../images/itemimages/teslawhite.webp';
import teslay from '../images/itemimages/teslay.webp';
import Footer from './Footer';
import Logo from './Logo';
import NavBar from './Navbar';

class Life extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="homeContainer">
          <Logo />
          <NavBar />
          <Footer />
        </div>
        <div>
          <img
            src={teslaWhite}
            alt="empty"
          />
          <div className="videoContainer">
            <iframe
              width="200"
              height="auto"
              src="https://www.youtube.com/embed/A5PIgmXGIdI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <img
            src={teslay}
            alt="empty"
          />
        </div>
      </div>
    );
  }
}
export default Life;
