/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the DataStore and passes the new data to its children.
 */

const Counter = require('./Counter.react');
const DataStore = require('../stores/DataStore');

global.jQuery = require('jquery');
//require('bootstrap'); // badly overwrites some functions
require('../../node_modules/bootstrap/js/modal.js');
const React = require('react');


function assembleState() {
  return {
    dataStoreData: DataStore.getData(), // Lovely name, isn't is?
    // ... Other state here
  };
}

const Main = React.createClass({

  getInitialState: function() {
    return assembleState();
  },

  componentDidMount: function() {
    DataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DataStore.removeChangeListener(this._onChange);
  },

  render: function() {

    return (
      <div className="container-flex col-md-12">
        <Counter countValue={this.state.dataStoreData.countValue}/>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the DataStore
   */
  _onChange: function() {
    this.setState(assembleState());
  }

});

module.exports = Main;
