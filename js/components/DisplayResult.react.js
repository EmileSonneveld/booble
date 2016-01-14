const React = require('react');

const Main = require('./Main.react');


const DisplayResult = React.createClass({

  render: function() {
    return (
		<div className="panel panel-default">
			<div className="panel-heading">
				<h3 className="panel-title">The result you where searching for:</h3>
			</div>
			<div className="panel-body">
				<img src={this.props.imgageUrl}/>
			</div>
		</div>
    );
  },

});

module.exports = DisplayResult;
