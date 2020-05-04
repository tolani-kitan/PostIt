import { combineReducers } from 'redux';
import groupReducer from './groupReducer';
import userReducer from './userReducer';
import addMsgReducer from './addMsgReducer';

export default combineReducers({
  group: groupReducer,
  user: userReducer,
  message: addMsgReducer
})