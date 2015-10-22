import dispatcher from 'app/dispatcher.js';
import { EventEmitter } from 'events';

import { STORE_INSULT } from 'app/constants/insultConstants.js';

const CHANGE_EVENT = "change";


/****
insult: string
****/

let insult = "Just you wait!"


let InsultStore = Object.assign({}, EventEmitter.prototype, {


  getInsult() {
    return insult;
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

  InsultStore.DispatchToken = dispatcher.register((action) => {

    switch (action.type) {

      /*** Stores the insult ***/

      case STORE_INSULT:

        insult = action.insult;

        InsultStore.emitChange();
        break;
}
    return true;
  });

  export default InsultStore;
