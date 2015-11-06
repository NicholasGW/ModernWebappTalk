import { FETCH_INSULT, STORE_INSULT } from 'app/constants/insultConstants.js';
import { dispatch } from 'app/dispatcher.js';
import $ from 'jquery'

export function fetchInsult() {

  return function() {

    $.ajax({
      method:"GET",
      url:'insults'
    }).then((insult) => {
      dispatch(storeInsult(insult));
    })
  }
}


export function storeInsult(insult) {
  return {
    type: STORE_INSULT,
    insult
  }
}


// export function sendInsult(insult) {
//
//   return function() {
//
//     $.ajax({
//       method:"POST",
//       url:'insults',
//       data: JSON.stringify({insult}),
//       contentType: "application/json"
//     }).then((insult) => {
//       dispatch(storeInsult(insult));
//     })
//   }
// }
