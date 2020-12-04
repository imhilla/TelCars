/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    localStorage.clear();
    const { history } = this.props;
    history.push('/');
    // axios.delete('https://infinite-ocean-27248.herokuapp.com/logout', { withCredentials: true });
    axios.delete('http://localhost:3001/logout', { withCredentials: true });

    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <button className="logoutButton" type="button" onClick={() => { this.handleLogoutClick(); }}>Logout</button>
      </div>
    );
  }
}
Logout.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
};

Logout.defaultProps = {
  history: {},
};

export default Logout;
