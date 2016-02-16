import { ADD_COMPLIMENT, REMOVE_COMPLIMENT } from '../constants/complimentConstants.js';


export function addCompliment(text) {
  return {
    type: ADD_COMPLIMENT,
    compliment: text
  }
}

export function removeCompliment(id) {
  return {
    type: REMOVE_COMPLIMENT,
    id: id
  }
}
