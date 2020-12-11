/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import NavBar from '../components/Navbar';
import '../styles/shop.css';

export default function Shop() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    };
    const fetchData = async () => {
      const result = await axios(
        // http://localhost:3001
        'http://localhost:3001/items', config, { withCredentials: true },
        // 'https://infinite-ocean-27248.herokuapp.com/items', config, { withCredentials: true },
      );
      setCars(result.data);
    };

    fetchData();
  }, []);

  const renderCars = cars.length !== 0 ? (
    cars.map((value, index) => (
      <div
        key={uuidv4()}
        className="shopitems"
      >
        <img
          className="itemsImg"
          id="itemsimage"
          alt="none"
          src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${index + 1}.webp`}
        />
        <p className="shopmodel">{value.model}</p>
        <p className="shopreview">{value.review}</p>
        <div>
          <p className="price">Price range</p>
          <p className="shopprice">
            {value.price}
          </p>
        </div>
      </div>
    ))
  ) : (<div>Loading</div>);

  return (
    <div className="home">
      <div className="homeContainer">
        <Logo />
        <NavBar />
        <Footer />
      </div>
      <div className="shopcars">
        {renderCars}
      </div>
    </div>
  );
}
