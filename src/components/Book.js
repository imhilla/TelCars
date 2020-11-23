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
      user_id: '',
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user,
      user_id: this.props.user_id,
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
          <Appointment user={this.state.user} user_id={this.state.user_id} />
        </div>
      </div>
    );
  }
}
export default Book;
