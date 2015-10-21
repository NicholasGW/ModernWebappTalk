import { ADD_COMPLIMENT } from 'app/constants/complimentConstants.js';


export function addCompliment(text) {
  return {
    type: ADD_COMPLIMENT,
    compliment: text
  }
}
