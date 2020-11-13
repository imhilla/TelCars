/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './welcome.css';
import Welcome1 from '../images/welcome1.jpg';
import Welcome2 from '../images/welcome2.jpg';
import Welcome3 from '../images/welcome3.jpg';
import Welcome4 from '../images/welcome4.jpg';
import Welcome5 from '../images/welcome5.jpg';

const slideImages = [
  Welcome1,
  Welcome2,
  Welcome3,
  Welcome4,
  Welcome5,
];

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      interval: false,
    };
    this.updateColor = this.updateColor.bind(this);
  }

  componentDidMount() {
    const intervalNumbers = [0, 1, 2, 3, 4];
    const { color } = this.state;
    setInterval(this.updateColor, 3000);
    console.log(color);
  }

  updateColor() {
    this.setState({
      color: 'white',
    });
    console.log('yes');
  }

  render() {
    const circleBody = (
      <div>
        <h1>HELLO</h1>
        <div className={'circle' + `${0}`} />
        <div className={`${1}`} />
        <div className={`${2}`} />
        <div className={`${3}`} />
        <div className={`${4}`} />
      </div>
    );

    return (
      <div>
        <button type="button" className="hello">
          <div className="first" />
          <div className="second" />
        </button>
        <div className="circlebody">{circleBody}</div>
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span>SAFE HEAVEN HOSPITAL</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
                <span>Slide 3</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
                <span>Slide 3</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${slideImages[4]})` }}>
                <span>Slide 3</span>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
export default Welcome;
