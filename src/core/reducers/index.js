import { combineReducers } from 'redux'
import groupReducer from './groupReducer'
import userReducer from './userReducer'

export default combineReducers({
  group: groupReducer,
  user: userReducer
})