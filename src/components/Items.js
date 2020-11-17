/* eslint-disable jsx-a11y/alt-text */
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
    axios.get('https://infinite-ocean-27248.herokuapp.com/items', { withCredentials: true })
      .then(response => {
        console.log('response data', response.data);
        this.setState({
          data: response.data,
        });
      });
  }

  render() {
    const { data } = this.state;
    const name = jsonQuery('[*][title]', { data }).value;
    const model = jsonQuery('[*][body]', { data }).value;
    const reviews = jsonQuery('[*][services]', { data }).value;
    const price = jsonQuery('[*][objectives]', { data }).value;
    const myitems = Object.keys(data);
    const url = 'https://res.cloudinary.com/dhxgtfnci/image/upload/v1605605870/hospital/tesla.webp';
    const display = data.length !== undefined
      ? (myitems.map((post, i) => (
        <div className="utopian-items">
          <p>
            <strong>Name </strong>
            {name[i]}
          </p>
          <p>
            <strong>Model </strong>
            {model[i]}
          </p>
          <p>
            <strong>Image </strong>
            <img src={url} />
          </p>
          <p>
            <strong>Reviews </strong>
            {reviews[i]}
          </p>
          <p>
            <strong>Price </strong>
            {price[i]}
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
