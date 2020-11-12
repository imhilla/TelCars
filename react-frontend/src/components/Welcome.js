/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import Welcome1 from '../images/welcome1.jpg';
import Welcome2 from '../images/welcome2.jpg';
import Welcome3 from '../images/welcome3.jpg';
import Welcome4 from '../images/welcome4.jpg';

const slideImages = [
  Welcome1,
  Welcome2,
  Welcome3,
  Welcome4,
];

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextImage: false,
    };
  }

  render() {
    return (
      <div>
        <img src={slideImages[2]} alt="" />
      </div>
    );
  }
}
export default Welcome;
