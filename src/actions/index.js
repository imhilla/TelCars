/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
  },
};

export const getAppointments = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/appointments', config, { withCredentials: true });
    dispatch({
      type: 'GET_APPOINTMENTS',
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};
export const getItems = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3001/items', config, { withCredentials: true });
    dispatch({
      type: 'GET_ITEMS',
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const setUser = () => ({
  type: 'SET_USER',
  payload: 'Rei',
});

export const logOut = () => ({
  type: 'LOG_OUT',
});
