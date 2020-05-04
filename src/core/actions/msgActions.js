import * as CONSTANTS from '../constants'

export const addMessage = (message) => {
  return({
    type: CONSTANTS.ADD_MESSAGE,
    payload: message
  })
}