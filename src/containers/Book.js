/* eslint-disable camelcase */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
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
    const { user, user_id } = this.props;
    this.setState({
      user,
      user_id,
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

Book.propTypes = {
  user: PropTypes.objectOf(PropTypes.any),
  user_id: PropTypes.number,
};

Book.defaultProps = {
  user: {},
  user_id: undefined,
};
export default Book;
