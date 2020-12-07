import { combineReducers } from 'redux';
import getAppointments from './login';

const rootReducer = combineReducers({
  getAppointments,
});
export default rootReducer;
