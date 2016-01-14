const React = require('react');
const DispatchedActions = require('../actions/DispatchedActions');

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

const SearchBar = React.createClass({

  render: function() {
    return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Search for..."
      onKeyDown={this._onType}
      value={this.props.inputValue}
      onChange={this._onChange}
      onClick={this._onInputClick} />
      <span className="input-group-btn">
        <button className="btn btn-default" type="button" onClick={this._onSearch}><span className="glyphicon glyphicon-search"/></button>
      </span>
    </div>
    );
  },

  _onInputClick: function(event) {
    event.target.select();
  },

  _onSearch: function() {
    if(this.props.inputValue !== "")
    {
      DispatchedActions.setRandomLink();
      DispatchedActions.setShowResult(true);

    }
  },

  _onChange: function(event) {
    DispatchedActions.setInputValue(event.target.value);
  },

  _onType: function(event) {
    if(event.key === "Enter")
      this._onSearch();
  }

});

module.exports = SearchBar;
