import * as CONSTANTS from '../constants'

  const initialState = {
    groups: []
  }

export default (state = initialState, action) => {
  switch(action.type){
    case CONSTANTS.ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload]
      }
   default:
     return state
  }
}