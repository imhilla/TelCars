/* eslint-disable react/no-direct-mutation-state */
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
import './items.css';

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
        let middle = Math.floor(response.data.length / 2);
        const first = middle;
        middle += 1;
        const last = middle + 1;
        this.state.threeIndex.push(first);
        this.state.threeIndex.push(middle);
        this.state.threeIndex.push(last);
        let fill = [];
        response.data.map((value, index) => {
          this.state.threeIndex.map((val, ind) => {
            if (index + 1 === val) {
              fill.push(value);
              this.setState({
                workingdata: fill,
              });
            }
            return fill;
          });
        });
        this.setState({
          data: response.data,
        });
      });
  }

  handleChangeLeft() {
    let threeData = this.state.newData;
    if (threeData.length === 3) {
      threeData = [];
    }
    const threeIndex = this.state.threeIndex;
    if (threeIndex[0] >= 1) {
      threeIndex[0] -= 1;
      threeIndex[1] -= 1;
      threeIndex[2] -= 1;
    }
    const newdata = this.state.data;
    newdata.map((value, index) => {
      threeIndex.map((val, ind) => {
        let workingdata = this.state.workingdata;
        if (index === val - 1) {
          workingdata[ind] = value;
        }
        return workingdata;
      });
    });
    this.setState({
      threeIndex,
    });
  }

  handleChangeRight() {
    const wholeArray = this.state.data;
    const mylength = wholeArray.length;
    let half = mylength / 2;
    half = Math.floor(half);
    const threeIndex = this.state.threeIndex;
    const limit = mylength;
    if (threeIndex[0] <= limit - 3) {
      threeIndex[0] += 1;
      threeIndex[1] += 1;
      threeIndex[2] += 1;
    }
    const newdata = this.state.data;
    newdata.map((value, index) => {
      threeIndex.map((val, ind) => {
        const workingdata = this.state.workingdata;
        if (index + 1 === val) {
          workingdata[ind] = value;
        }
        return workingdata;
      });
    });
    this.setState({
      threeIndex,
    });
  }

  render() {
    const { workingdata, threeIndex } = this.state;
    const myitems = Object.keys(workingdata);
    const display = workingdata.length !== 0
      ? (myitems.map((post, i) => (
        <div className="utopian-items">
          <p>
            {/* <strong>Image </strong> */}
            <img className="itemsImg" src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${threeIndex[0] + i}.webp`} />
          </p>
          <p>
            <strong>Name </strong>
            {workingdata[i].name}
          </p>
          <p>
            <strong>Model </strong>
            {workingdata[i].model}
          </p>
          <p>
            <strong>Reviews </strong>
            {workingdata[i].reviews}
          </p>
          <p>
            <strong>Price </strong>
            {workingdata[i].price}
          </p>
        </div>
      ))) : (<div>Loading</div>);

    return (
      <div className="itemsContainer">
        <button onClick={this.handleChangeLeft}>Click left</button>
        {display}
        <button onClick={this.handleChangeRight}>Click right</button>
      </div>
    );
  }
}
export default Items;
