/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    axios.delete('http://localhost:3001/logout', { withCredentials: true });
    window.location.reload(false);
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => { this.handleLogoutClick(); }}>Logout</button>
      </div>
    );
  }
}

export default Logout;
