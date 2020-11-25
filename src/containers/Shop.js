/* eslint-disable react/jsx-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import NavBar from '../components/Navbar';
import '../styles/shop.css';

export default function Shop() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://infinite-ocean-27248.herokuapp.com/items', { withCredentials: true },
      );
      setCars(result.data);
    };

    fetchData();
  }, []);

  const renderCars = cars.length !== 0 ? (
    cars.map((value, index) => (
      <div className="shopitems">
        <img
          className="itemsImg"
          alt="none"
          src={`https://res.cloudinary.com/dhxgtfnci/image/upload//hospital/tesla${index + 1}.webp`}
        />
        <p className="shopname">{value.name}</p>
        <p className="shopmodel">{value.model}</p>
        <p className="shopprice">{value.price}</p>
        <p className="shopreview">{value.review}</p>
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
