/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3001/items', { withCredentials: true })
      .then(response => {
        // console.log('logout errors', response.data);
        this.setState({
          data: response.data,
        });
      });
  }

  render() {
    const { data } = this.state;
    const items = data.length === undefined ? (<div>Loading</div>) : (
      <div>
        {
        
        }

      </div>
    );

    return (
      <div>
        {items}
      </div>
    );
  }
}
export default Items;
