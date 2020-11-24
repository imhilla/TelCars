/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import NavBar from '../components/Navbar';
import Appointment from '../components/Appointment';

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
          <Appointment user={this.state.user} userId={this.state.user_id} />
        </div>
      </div>
    );
  }
}
export default Book;
