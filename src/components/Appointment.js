/* eslint-disable array-callback-return */
/* eslint-disable arrow-parens */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './appointment.css';

export default function Appointment() {
  let [models, model, location, setLocation, setModel, setModels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://infinite-ocean-27248.herokuapp.com/items', { withCredentials: true },
      );
      setModels(result.data);
    };

    fetchData();
  }, []);
  const locations = ['LOCATIONS', 'Nairobi', 'Kisumu', 'Mombasa', 'Eldoret', 'Kiambu', 'Migori', 'Isiolo'];

  const renderLocation = locations.map(item => (
    <option value={item}>{item}</option>
  ));

  const allModels = ['All MODELS'];
  models.map((value, index) => {
    allModels.push(value.model);
  });

  const renderModels = allModels.map(item => (
    <option value={item}>{item}</option>
  ));

  const handleModelChange = e => {
    const model = e.target.value;
    console.log(model);
    // changeFilter(filter);
  };

  const handleLocationChange = e => {
    const location = e.target.value;
    console.log(location);
    // changeFilter(filter);
  };

  return (
    <div className="appointmentContainer">
      <h1>Book a ride</h1>
      <div className="appointmentcontent">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus elit id tortor
          pulvinar sollicitudin.
          Nam placerat, risus vitae sollicitudin consequat, neque nunc
          vulputate justo, ac volutpat nunc ex elementum enim.
          Donec egestas vestibulum metus, in porttitor nulla facilisis id.
          Vivamus fermentum vitae neque vel blandit.
          Aenean ut mauris at arcu tincidunt vestibulum vel a mi.
          Fusce eget ipsum vitae tortor sollicitudin rutrum
        </p>
      </div>
      <div className="booksection">
        <select
          // id="inputGroupSelect01"
          // value={filter}
          onChange={handleModelChange}
          className="models"
        >
          {renderModels}
        </select>
        <select
          // id="inputGroupSelect01"
          // value={filter}
          onChange={handleLocationChange}
          className="locations"
        >
          {renderLocation}
        </select>
        <button className="appbutton">
          Book now
        </button>
      </div>
    </div>
  );
}
