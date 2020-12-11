/* eslint-disable camelcase */
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
      user: {},
      user_id: undefined,
    };
  }

  componentDidMount() {
    this.setState({
      user: localStorage.username,
      user_id: localStorage.id,
    });
  }

  render() {
    const { user, user_id } = this.state;
    return (
      <div className="home">
        <div className="homeContainer">
          <Logo />
          <NavBar />
          <Footer />
        </div>
        <Appointment user={user} userId={user_id} />
      </div>
    );
  }
}

export default Book;
