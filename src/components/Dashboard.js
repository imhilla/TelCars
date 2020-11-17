/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Dashboard = props => (
  <div>
    <div>
      <h1>Dashboard</h1>
      <h1>status: {props.loggedInStatus}</h1>
    </div>
  </div>
);
export default Dashboard;
