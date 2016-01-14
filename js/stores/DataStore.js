// *Store.js  This is a container far data.
// When having a totally unbrelated set of data,
// it is best to make a new store.

const AppDispatcher = require('../dispatcher/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const BoobleLinks = require('../constants/BoobleLinks');
const Synonyms = require('../constants/Synonyms');
const MessageConstants = require('../constants/MessageConstants');
const assign = require('object-assign');

const CHANGE_EVENT = 'change';

var _myData = {
  imgageUrl: "#",
  inputValue: "",
  inputValueTarget: "boobs",
  showResult: false,
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

    case MessageConstants.SET_RANDOM_LINK:
      _myData.imgageUrl = BoobleLinks[Math.floor(Math.random() * BoobleLinks.length)];
      DataStore.emitChange();
      break;

    case MessageConstants.SET_INPUT_VALUE:
      console.log("input: "+action.newInputValue);
      if(_myData.inputValue == "")
        _myData.inputValueTarget =
          Synonyms[Math.floor(Math.random() * Synonyms.length)];


      _myData.inputValue = _myData.inputValueTarget.substring(0, action.newInputValue.length);

      DataStore.emitChange();
      break;

    case MessageConstants.SET_DISPLAY_RESULT:
      _myData.showResult = action.showResult;
      DataStore.emitChange();
      break;

    // case MessageConstants...

    default:
      // no op
  }
});

module.exports = DataStore;
