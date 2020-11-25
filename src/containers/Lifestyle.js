/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import '../styles/lifestyle.css';
import teslaWhite from '../images/itemimages/teslawhite.webp';
import teslay from '../images/itemimages/teslay.webp';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import NavBar from '../components/Navbar';

class Life extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="homeContainer">
          <Logo />
          <NavBar />
          <Footer />
        </div>
        <div className="lifestyleContainer">
          <img
            src={teslaWhite}
            alt="empty"
            className="lifeimg"
          />
          <div className="videoContainer">
            <iframe
              width="160"
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
            className="lifeimg"
          />
          <div className="videoContainer">
            <iframe
              width="160"
              height="auto"
              src="https://www.youtube.com/embed/A5PIgmXGIdI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <img
            src={teslaWhite}
            alt="empty"
            className="lifeimg"
          />
          <div className="videoContainer">
            <iframe
              width="160"
              height="auto"
              src="https://www.youtube.com/embed/A5PIgmXGIdI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <img
            src={teslaWhite}
            alt="empty"
            className="lifeimg"
          />
          <div className="videoContainer">
            <iframe
              width="160"
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
            className="lifeimg"
          />
        </div>
      </div>
    );
  }
}
export default Life;
