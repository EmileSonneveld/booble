// *Store.js  This is a container far data.
// When having a totally unbrelated set of data,
// it is best to make a new store.

const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const MessageConstants = require('../constants/MessageConstants');
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var _myData = {
  countValue: 0,
};


function updateMyData(updates) {
  update(_myData, updates);
}

const DataStore = assign({}, EventEmitter.prototype, {

  getData: function() {
    return _myData;
  },

  // ... Add more getters here

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});


AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case MessageConstants.INCREASE_COUNT_VALUE:
      _myData.countValue += action.extraValue;
      DataStore.emitChange();
      break;

    // case MessageConstants...

    default:
      // no op
  }
});

module.exports = DataStore;
