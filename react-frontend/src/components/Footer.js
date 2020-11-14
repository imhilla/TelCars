/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { FaTwitter, FaFacebookF, FaGooglePlusG, FaPinterestP } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div>
          <FaTwitter />
          <FaFacebookF />
          <FaGooglePlusG />
          <FaPinterestP />
        </div>
        Footer
      </div>
    );
  }
}
export default Footer;
