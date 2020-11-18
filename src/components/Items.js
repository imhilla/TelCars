/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable prefer-destructuring */
/* eslint-disable prefer-const */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/button-has-type */
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
      newData: [],
      threeIndex: [],
      workingdata: [],
    };
    this.handleChangeLeft = this.handleChangeLeft.bind(this);
    this.handleChangeRight = this.handleChangeRight.bind(this);
  }

  componentDidMount() {
    axios.get('https://infinite-ocean-27248.herokuapp.com/items', { withCredentials: true })
      .then(response => {
        // console.log(this.state.threeIndex);
        // console.log(response.data.length);
        let middle = Math.floor(response.data.length / 2);
        // console.log(middle);
        const first = middle;
        middle += 1;
        const last = middle + 1;
        this.state.threeIndex.push(first);
        this.state.threeIndex.push(middle);
        this.state.threeIndex.push(last);
        // console.log(this.state.threeIndex);
        // console.log('response data', response.data);
        this.setState({
          data: response.data,
        });
      });
  }

  handleChangeLeft() {
    const wholeArray = this.state.data;
    let threeData = this.state.newData;
    if (threeData.length === 3) {
      threeData = [];
    }
    const mylength = wholeArray.length;
    let half = mylength / 2;
    half = Math.floor(half);
    const threeIndex = this.state.threeIndex;
    threeIndex.map((value, index) => {
      let num = value - half;
      if (Math.sign(num) !== -1) {
        threeData.push(wholeArray[num]);
      }
      this.setState({
        newData: threeData,
      });
      return threeData;
    });
    if (threeIndex[0] >= 2) {
      threeIndex[0] -= 1;
      threeIndex[1] -= 1;
      threeIndex[2] -= 1;
    }
    const newdata = this.state.data;
    newdata.map((value, index) => {
      threeIndex.map((val, ind) => {
        const workingdata = this.state.workingdata;
        if (index === val) {
          console.log(value);
          workingdata.push(value);
        }
        return workingdata;
      });
    });
    this.setState({
      threeIndex,
    });
  }

  handleChangeRight() {
    console.log('right');
  }

  render() {
    const { data } = this.state;
    const name = jsonQuery('[*][name]', { data }).value;
    const model = jsonQuery('[*][model]', { data }).value;
    const reviews = jsonQuery('[*][reviews]', { data }).value;
    const price = jsonQuery('[*][price]', { data }).value;
    const myitems = Object.keys(data);
    const url = 'https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla.webp';
    const display = data.length !== undefined
      ? (myitems.map((post, i) => (
        <div className="utopian-items">
          <p>
            <strong>Image </strong>
            <img src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${i}.webp`} />
          </p>
          <p>
            <strong>Name </strong>
            {name[i]}
          </p>
          <p>
            <strong>Model </strong>
            {model[i]}
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
        <button onClick={this.handleChangeLeft}>Click left</button>
        {display}
        <button onClick={this.handleChangeRight}>Click right</button>
      </div>
    );
  }
}
export default Items;
