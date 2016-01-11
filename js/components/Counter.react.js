const React = require('react');
const DispatchedActions = require('../actions/DispatchedActions');


const Counter = React.createClass({

  render: function() {
    return (
      <div>
        <b>Count:</b> {this.props.countValue}
        <button type="button" className="btn btn-default" onClick={this._onclick}>
          <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Increase
        </button>
      </div>
    );
  },

  _onclick : function() {
    DispatchedActions.addToValue(1);
  },

});

module.exports = Counter;
