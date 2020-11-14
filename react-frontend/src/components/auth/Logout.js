/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    // this.handleLogout = this.handleLogout.bind(this);
  }

  // handleLogout() {
  //   this.props.history.push('/');
  // }

  handleLogoutClick() {
    axios.delete('http://localhost:3001/logout', { withCredentials: true })
      .then(error => {
        console.log('logout errors', error);
      });
    // this.handleLogout();
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.handleLogoutClick(); }}>Logout</button>
      </div>
    );
  }
}

export default Logout;
