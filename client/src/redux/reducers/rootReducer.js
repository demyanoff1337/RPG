import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import userReducer from './userReducer';
import authorizationReducer from './authorizationReducer';

const rootReducer = combineReducers({ people: peopleReducer, user: userReducer, authorization: authorizationReducer });

export default rootReducer;
