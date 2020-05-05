import * as CONSTANTS from '../constants'

  const initialState = {
    users: []
  }

export default (state = initialState, action) => {
  switch(action.type){
    case CONSTANTS.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
   default:
     return state
  }
}
