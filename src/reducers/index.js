/* eslint-disable import/no-duplicates */
import { combineReducers } from 'redux';
import getAppointments from './login';

const rootReducer = combineReducers({
  getAppointments,
});
export default rootReducer;
