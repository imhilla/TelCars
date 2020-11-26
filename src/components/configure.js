/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-key */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../styles/configure.css';
import {
  FaRegSun, FaAngleRight,
} from 'react-icons/fa';
import Welcome1 from '../images/welcome1.jpg';
import Welcome2 from '../images/welcome2.jpg';
import Welcome3 from '../images/welcome3.jpg';
import Welcome4 from '../images/welcome4.jpg';
import Welcome5 from '../images/welcome5.jpg';
import Search from '../images/search.png';

const slideImages = [
  Welcome1,
  Welcome2,
  Welcome3,
  Welcome4,
  Welcome5,
];
class Configure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transparent: 'transparent',
      white: 'white',
      interval: false,
      oneArray: [0],
    };
    this.updateColor = this.updateColor.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  componentDidMount() {
    const { color } = this.state;
    setInterval(this.updateColor, 6000);
  }

  handleLogin() {
    this.props.history.push('/login');
    console.log('hello');
  }

  handleRegistration() {
    this.props.history.push('/signup');
    console.log('me');
  }

  updateColor() {
    const { oneArray } = this.state;
    let item = oneArray[0];
    if (item <= 5) {
      item += 1;
      this.setState({
        oneArray: [item],
      });
      if (item === 6) {
        item = 0;
        this.setState({
          oneArray: [item],
        });
      }
    }
  }

  render() {
    const intervalNumbers = [0, 1, 2, 3, 4, 5];
    const oneArray = this.state;
    const circle = (
      intervalNumbers.map((value, index) => {
        const change = oneArray.oneArray[0];
        return (
          <div
            className="default"
            style={change === index ? { backgroundColor: `${this.state.white}` } : { backgroundColor: `${this.state.transparent}` }}
          />
        );
      })
    );

    return (
      <div>
        <button type="button" className="hello">
          <div className="first" />
          <div className="second" />
        </button>
        <div className="loginRegister">
          <button className="configure">
            <FaRegSun className="regsum" />
            <div className="config">Configure</div>
            <FaAngleRight className="rightfa" />
          </button>
        </div>
        <div className="search">
          <img src={Search} alt="" className="simage" />
        </div>
        <div className="circlebody">
          {circle}
        </div>
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[0]})` }}>
                <span style={{ color: 'white' }}>2020 Tesla Model Y</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[1]})` }}>
                <span style={{ color: 'white' }}>2020 Tesla Model X</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[2]})` }}>
                <span style={{ color: 'white' }}>2020 Hyundai Kona EV</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[3]})` }}>
                <span style={{ color: 'white' }}>2020 Nissan LEAF</span>
              </div>
            </div>
            <div className="each-slide">
              <div className="conffont" style={{ backgroundImage: `url(${slideImages[4]})` }}>
                <span style={{ color: 'white' }}>2020 Toyota I-PACE</span>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
export default Configure;
