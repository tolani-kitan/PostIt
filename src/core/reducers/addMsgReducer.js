import * as CONSTANTS from '../constants'

  const initialState = {
    messages: []
  }

export default (state = initialState, action) => {
  
  switch(action.type){
    case CONSTANTS.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
   default:
     return state
  }
}
