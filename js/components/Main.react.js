/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the DataStore and passes the new data to its children.
 */

const SearchBar = require('./SearchBar.react');
const DisplayResult = require('./DisplayResult.react');
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

    const schrodingerResult = this.state.dataStoreData.showResult ?
      (<DisplayResult imgageUrl={this.state.dataStoreData.imgageUrl}/>)
      : null;

    return (
      <div className="container-flex">
        <div className="col-md-2">
        </div>
        <div className="col-md-8">
          <div className="jumbotron text-center">
            <h1>Booble!</h1>
            <p>The most efficient search engine around</p>
          </div>

          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">

              <SearchBar inputValue={this.state.dataStoreData.inputValue}/>

            </div>
            <div className="col-md-4">
            </div>
          </div>

          <div className="text-center">

            {schrodingerResult}

          </div>
        </div>
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
