import dispatcher from 'app/dispatcher.js';
import { EventEmitter } from 'events';

import { ADD_COMPLIMENT, REMOVE_COMPLIMENT } from 'app/constants/complimentConstants.js';

const CHANGE_EVENT = "change";


/****
compliment: {
                id,
                text
              }
****/

let compliments = [{id: 1, text: "React rocks!"}, {id: 2, text: "You're so smart!"}];


let ComplimentStore = Object.assign({}, EventEmitter.prototype, {


  getCompliments() {
    return compliments;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

  ComplimentStore.DispatchToken = dispatcher.register((action) => {

    switch (action.type) {

      /*** Adds a compliment. Stays pure using Object.assign and destructuring. ***/

      case ADD_COMPLIMENT:

        let newCompliment = Object.assign({}, {text: action.compliment}, {id: compliments.length + 1});

        compliments = [...compliments, newCompliment];

        ComplimentStore.emitChange();
        break;


      /*** Removes a compliment by ID. Uses filter ***/
      case REMOVE_COMPLIMENT:

        compliments = compliments.filter((compliment) => {
          return compliment.id !== action.id;
        });

        ComplimentStore.emitChange();
        break;
    }

    return true;
  });

  export default ComplimentStore;
