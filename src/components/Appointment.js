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
  let [models, setModels] = useState([]);

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

  console.log(models);
  const allModels = [];
  models.map((value, index) => {
    console.log(value.model);
  });

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
      <div>
        <select
          // id="inputGroupSelect01"
          // value={filter}
          // onChange={handleFilterChange}
          className="locations"
        >
          {renderLocation}
        </select>
        <select
          // id="inputGroupSelect01"
          // value={filter}
          // onChange={handleFilterChange}
          className="locations"
        >
          {renderLocation}
        </select>
        <button>
          Book now
        </button>
      </div>
    </div>
  );
}
