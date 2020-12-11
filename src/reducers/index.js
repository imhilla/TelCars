/* eslint-disable import/no-duplicates */
import { combineReducers } from 'redux';
import getAppointments from './allreducers';

const rootReducer = combineReducers({
  getAppointments,
});
export default rootReducer;
