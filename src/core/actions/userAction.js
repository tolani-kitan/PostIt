import * as CONSTANTS from '../constants'

export const addUser = (user) => {
  return({
    type: CONSTANTS.ADD_USER,
    payload: user
  })
}