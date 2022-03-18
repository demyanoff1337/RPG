import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ people: peopleReducer, user: userReducer });

export default rootReducer;
