/* eslint-disable lines-between-class-members */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '',
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3001/items', { withCredentials: true })
      .then(error => {
        console.log('logout errors', error);
      });
  }

  render() {
    return (
      <div>Items component</div>
    );
  }
}
export default Items;
