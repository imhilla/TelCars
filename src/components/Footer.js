import React from 'react';
import '../styles/footer.css';
import {
  FaTwitter, FaFacebookF, FaGooglePlusG, FaPinterestP, FaWhatsapp,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <div className="footerr">
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
