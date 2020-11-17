/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import axios from 'axios';

const jsonQuery = require('json-query');

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
        console.log('response data', response.data);
        this.setState({
          data: response.data,
        });
      });
  }

  render() {
    const { data } = this.state;
    const title = jsonQuery('[*][title]', { data }).value;
    const body = jsonQuery('[*][body]', { data }).value;
    const services = jsonQuery('[*][services]', { data }).value;
    const objectives = jsonQuery('[*][objectives]', { data }).value;
    const myitems = Object.keys(data);
    const display = data.length !== undefined
      ? (myitems.map((post, i) => (
        <div className="utopian-items">
          <p>
            <strong>Title: </strong>
            {title[i]}
          </p>
          <p>
            <strong>Body: </strong>
            {body[i]}
          </p>
          <p>
            <strong>Objectives: </strong>
            {objectives[i]}
          </p>
          <p>
            <strong>Objectives: </strong>
            {services[i]}
          </p>
        </div>
      ))) : (<div>Loading</div>);

    return (
      <div>
        {display}
      </div>
    );
  }
}
export default Items;
