/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './footer.css';
import {
  FaTwitter, FaFacebookF, FaGooglePlusG, FaPinterestP, FaWhatsapp,
} from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <FaTwitter className="icons" />
          <FaFacebookF className="icons" />
          <FaGooglePlusG className="icons" />
          <FaPinterestP className="icons" />
          <FaWhatsapp className="icons" />
        </div>
        <p className="copyright">@2020 Hillary</p>
      </div>
    );
  }
}
export default Footer;
