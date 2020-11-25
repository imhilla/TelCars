/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
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
import {
  FaTwitter, FaFacebookF, FaPinterestP, FaAngleLeft, FaAngleRight,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/items.css';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      newData: [],
      threeIndex: [],
      workingdata: [],
      colorArray: ['wheat', 'wheat', ' rgb(59, 59, 92)', 'rgb(23, 23, 119)', 'rgb(23, 23, 119)', 'wheat'],
    };
    this.handleChangeLeft = this.handleChangeLeft.bind(this);
    this.handleChangeRight = this.handleChangeRight.bind(this);
    this.backColor = this.backColor.bind(this);
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
    if (threeIndex[0] >= 2) {
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

  backColor(index) {
    console.log(index);
    return this.state.colorArray[index - 1];
  }

  render() {
    const { workingdata, threeIndex } = this.state;
    const myitems = Object.keys(workingdata);
    const display = workingdata.length !== 0
      ? (myitems.map((post, i) => (
        <div className="utopian-items">
          <div className="itemContainer">
            {/* <strong>Image </strong> */}
            <div className="backgroundc" style={{ backgroundColor: `${this.backColor(threeIndex[0] + i)}` }} />
            <Link to={`/model/${workingdata[i].id}`}>
              {/* {console.log(threeIndex[0] + i)} */}
              <img className="itemsImg" src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${threeIndex[0] + i}.webp`} />
            </Link>
          </div>
          <p className="teslanames">
            {workingdata[i].name}
          </p>
          <div className="dots">............</div>
          <p className="itemdescrption">Descrption, remember to create an extra column</p>
          <div className="footer">
            <FaTwitter className="icons" />
            <FaFacebookF className="icons" />
            <FaPinterestP className="icons" />
          </div>
        </div>
      ))) : (<div>Loading</div>);

    return (
      <div className="itemsContainer">
        <button
          className="leftbutton"
          onClick={this.handleChangeLeft}
        >
          <FaAngleLeft />
        </button>
        {display}
        <button
          className="rightbutton"
          onClick={this.handleChangeRight}
        >
          <FaAngleRight />
        </button>
      </div>
    );
  }
}
export default Items;
