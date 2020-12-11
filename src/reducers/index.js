/* eslint-disable import/no-duplicates */
import { combineReducers } from 'redux';
import getAppointments from './login';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  getAppointments,
  currentUser,
});
export default rootReducer;
