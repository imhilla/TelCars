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
          <button onClick={this.handleLogin} className="login">LOGIN</button>
          <button onClick={this.handleRegistration} className="register">SIGN UP</button>
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
export default Configure;
