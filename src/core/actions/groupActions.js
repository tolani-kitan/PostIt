import * as CONSTANTS from '../constants'


export const addGroup = (group) => {
  return({
    type: CONSTANTS.ADD_GROUP,
    payload: group
  })
}