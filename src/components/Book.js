/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Footer from './Footer';
import Logo from './Logo';
import NavBar from './Navbar';
import Appointment from './Appointment';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user,
    });
  }

  render() {
    return (
      <div className="home">
        <div className="homeContainer">
          <Logo />
          <NavBar />
          <Footer />
        </div>
        <div>
          <Appointment user={this.state.user} />
        </div>
      </div>
    );
  }
}
export default Book;
